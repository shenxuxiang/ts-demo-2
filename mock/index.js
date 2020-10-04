const path = require('path');
const child_process = require('child_process');
const parseURL = require('url').parse;
const Application = require('./application');
const app = new Application();

function getRequestBody(req, res) {
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

app.use(async (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const { query } = parseURL(url, true);
  if (method === 'GET') {
    req.body = query;
  } else if (method === 'POST') {
    req.body = await getRequestBody(req, res);
  }
  console.log(req.body);
  next();
});

app.use(async (req, res, next) => {
  // 执行 shell 命令
  const worker = child_process.spawn('sh', ['./run.sh'], { cwd: path.join(__dirname, '../'), shell: true });
  worker.on('close', function(code, signal) {
    console.log('子进程已经关闭了', code, signal);
  });
  worker.on('exit', function(code, signal) {
    console.log('子进程已经退出', code, signal);
  });
  next();
});

app.use(async (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end();
  await next();
});

app.listen(3001, function() {
  console.log('start success');
})