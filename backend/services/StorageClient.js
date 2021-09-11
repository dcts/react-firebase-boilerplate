const RandomToken = require('./helpers/RandomToken.js');
const UrlHelper = require('./helpers/UrlHelper.js');

const httpAdapter = require('axios/lib/adapters/http');
const axios = require('axios');

/**
 * Service that connects to cloud storage by firebase <br>
 * see [google documentation](https://firebase.google.com/docs/storage) <br>
 * `EXAMPLE`: `await (new StorageClient(storage)).uploadFromUrl(url)` <br>
 * `EXAMPLE`: `await (new StorageClient(storage)).setBucket("YOUR_BUCKET_ID").uploadFromUrl(url)` <br>
 */
class StorageClient {
  /**
   * initialize storageClient with a firebase instance <br>
   * storage is the object returned by app.storage() <br>
   */
  constructor(storage) {
    if (storage.storageClient.baseUrl !== "https://storage.googleapis.com/storage/v1") {
      throw new Error("Invalid storage object inputtet. Should be generated with app.storage().");
    }
    this.storage = storage;
    this.bucket = this.storage.bucket(); // uses default bucket
  }

  setBucket(bucketName) {
    this.bucket = this.storage.bucket(bucketName);
    return this;
  }

  async uploadFromUrl(url, folder = "_DefaultFolder", filename = RandomToken.generate(10)) {
    // construct full file path and generate access token
    const bucketName = this.bucket.name;
    const fullPath = `${folder}/${filename}`;
    const fullPathUrlEncoded = fullPath.split("/").join("%2F"); // `${folder}%2F${filename}.${fileEnding}`
    const accessToken = RandomToken.generate(20);
    // init file
    const file = this.bucket.file(fullPath);

    // follow all redirections of url and make axios get request to get image stream
    url = await UrlHelper.followRedirections(url);
    const axiosResponse = await axios.get(url, { responseType: 'stream', adapter: httpAdapter });
    if (axiosResponse.status !== 200) {
      throw new Error(`axios request to ${url} was not successfull.`);
    }

    // prepare write stream + tweak options if needed
    const output = file.createWriteStream({
      gzip: false, // do not encode with GZIP!!
      // if public is true, the file can be found here: `https://storage.googleapis.com/${bucketName}/${fullPath}`;
      public: false, // media token needed, more restricted and secure
      metadata: {
        contentType: axiosResponse.headers['content-type'],
        metadata: {
          firebaseStorageDownloadTokens: accessToken, // define access token
        },
      }
    });

    const stream = axiosResponse.data;

    const streamPromise = new Promise((resolve, reject) => {
      stream.on('data', (chunk) => {
        output.write(new Buffer.from(chunk));
      });
      stream.on('end', () => {
        output.end();
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${fullPathUrlEncoded}?alt=media&token=${accessToken}`;
        resolve(publicUrl);
      });
      stream.on('error', (err) => {
        output.end();
        reject(err);
      })
    });
    return await streamPromise;
  }
}

// EXPORT CLASS
module.exports = StorageClient;
