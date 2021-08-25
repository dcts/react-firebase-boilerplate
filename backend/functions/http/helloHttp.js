const functions = require('firebase-functions');
const admin = require('firebase-admin');
let db = admin.firestore();


/**
 * Example HTTP Function
 * => uses firestore connection
 */
exports.run = functions
  .runWith({ timeoutSeconds: 120, memory: "256MB" })
  .https
  .onRequest(async (req, res) => {
    // allow CORS to enable making calls from client (frontend)
    // => https://stackoverflow.com/a/51922520/6272061
    res.set('Access-Control-Allow-Origin', '*');

    const querySnap = await db.collection("users").get();
    const n = querySnap.size;
    res.status(200).json({
      status: "ok",
      message: `${n} users found!`
    }).end();
  });
