/*
 * LOAD DEV ENVIRONMENT
 * for quick testing and tryout
 */


/*
 * TODO DEVELOPER
 * (1) Export admin sdk credentials file from firebase console
 *     and upload to folder backend/credentials
 * (2) Set credentialFileName
 * (3) Replace storageBucketName with firebase storage bucket name
 *     from firebase console => storage
 */
const credentialFileName = "react-firebase-boilerpla-fc860-firebase-adminsdk-hq5mf-303c3ffe7d.json"; // <= CHANGE THIS!!!
const storageBucketName = "react-firebase-boilerpla-fc860.appspot.com"; // <= CHANGE THIS!!!

// LOAD EXTERNAL PACKAGES
require('dotenv').config();
const axios = require("axios");

// FIREBASE CONNECTION
const admin = require('firebase-admin');
const serviceAccount = require(`./credentials/${credentialFileName}`);
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: storageBucketName
}, `app_${new Date().toISOString()}`); // if you want to load multiple apps

// firebase db connection
const db = app.firestore();

// firebase storage connection
const StorageClient = require("./services/StorageClient.js");
const storage = app.storage();
const storagePROD = new StorageClient(storage).setBucket(storageBucketName);

// HELPERS
const RandomToken = require("./services/helpers/RandomToken.js");
const FirebaseTimestamp = require("./services/helpers/FirebaseTimestamp.js");
const ImageHelper = require("./services/helpers/UrlHelper.js");

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
console.log(fs.readFileSync('init-dev-env-message.txt', 'utf8'));
console.log("\n\n");
