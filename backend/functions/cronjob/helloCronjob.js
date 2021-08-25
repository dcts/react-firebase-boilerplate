const functions = require('firebase-functions');

/**
 * Example Cronjob
 */
exports.run = functions
  .runWith({ timeoutSeconds: 540, memory: '1GB' })
  .pubsub.schedule(`0 0 1 * *`) // At 00:00 on day-of-month 1 => https://crontab.guru/every-month
  .onRun(async context => { // for example use context.timestamp for the time of the request
    console.log("running test cronjob every month");
    return 0;
  });
