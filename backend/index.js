// import functions and firestore
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions
  .runWith({ timeoutSeconds: 120, memory: "256MB" })
  .https
  .onRequest((req, res) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    res.send("Hello from Firebase!");
  });

exports.helloFirestore = functions
  .runWith({ timeoutSeconds: 120, memory: "256MB" })
  .https
  .onRequest(async (req, res) => {
    const querySnap = await db.collection("users").get();
    const n = querySnap.size;
    res.status(200).json({
      status: "ok",
      message: `${n} users found!`
    }).end();
  });


// exports.node16 = functions.https.onRequest((req, res) => {
//   try {
//     const matchObj = /(Java)(Script)/d.exec('JavaScript'); // will throw an error in JS14
//     res.status(200).json({
//       status: "ok",
//       indices0: matchObj.indices[0],
//       indices1: matchObj.indices[1],
//       indices2: matchObj.indices[2],
//     }).end();
//   } catch(err) {
//     res.status(200).json({
//       status: "error",
//       errorMessage: err.message,
//       errorStack: err.stack,
//     }).end();
//   }
// })
