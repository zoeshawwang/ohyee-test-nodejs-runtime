var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');

const BUILD_TIME = '{BUILD_TIME}';
const VERSION = '1.0.5'; 

exports.handler = (req, resp, context) => {
  console.log('hello world');

  var params = {
    path: req.path,
    queries: req.queries,
    headers: req.headers,
    method: req.method,
    requestURI: req.url,
    clientIP: req.clientIP,
    version: VERSION,
    buildVersion: BUILD_TIME,
  };

  getRawBody(req, function (err, body) {
    for (var key in req.queries) {
      var value = req.queries[key];
      resp.setHeader(key, value);
    }
    resp.setHeader('Content-Type', 'application/json');
    params.body = body.toString();

    resp.send(JSON.stringify(params, null, '    '));
  });
};
