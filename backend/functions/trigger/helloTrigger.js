const functions = require('firebase-functions');

/**
 * Example OnCreate Trigger
 */
exports.run = functions.firestore.document('users/{userId}').onCreate(async (snap, context) => {
  const userId = context.params.userId;
  console.log(`user ${userId} created with following data:`);
  console.log(snap.data());
  return 0;
});
