// initialize firebase app
const admin = require('firebase-admin');
admin.initializeApp();



/**
 * Triggers
 * => onCreate, onUpdate, onDelete
 */
// helloTrigger (example function triggered on database changes)
const helloTrigger = require("./functions/trigger/helloTrigger.js");
exports.helloTrigger = helloTrigger.run;


/**
 * HTTP REQUESTS
 * => API endpoints, HTTP get/post
 */
// helloHttp (function connected to db)
const helloHttp = require("./functions/http/helloHttp.js");
exports.helloHttp = helloHttp.run;

/**
 * CALLABLE FUNCTIONS
 * => usable in iOS or webapp
 */
// helloCallable
const helloCallable = require("./functions/callable/helloCallable.js");
exports.helloCallable = helloCallable.run;

/**
 * CRONJOBS
 * => run every given timeinterval
 */
// helloCronjob
const helloCronjob = require("./functions/cronjob/helloCronjob.js");
exports.helloCronjob = helloCronjob.run;
