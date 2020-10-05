const parseURL = require('url').parse;

function getRequestBody(req) {
  const bufs = [];
  return new Promise((resolve, reject) => {
    req.on('data', function(chunk) {
      bufs.push(chunk);
    });

    req.on('end', function() {
      const buf = JSON.parse(Buffer.concat(bufs).toString());
      return resolve(buf);
    });

    req.on('error', function() {
      return reject();
    });
  });
}

function queryBody() {
  return async function(req, res, next) {
    const url = req.url;
    const method = req.method;
    if (method === 'GET') {
      const { query } = parseURL(url, true);
      req.body = query;
    } else if (method === 'POST') {
      req.body = await getRequestBody(req);
    }
    next();
  };
}

module.exports = queryBody;
