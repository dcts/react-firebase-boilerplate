const functions = require('firebase-functions');

/**
 * Example Callable Function
 */
exports.run = functions.https.onCall(async (data, context) => {
  const input1 = data.input1; // example input
  const input2 = data.input2; // example input
  return {
    input1,
    input2,
  };
});
