const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
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
// static
app.use(async (req, res, next) => {
  const url = req.url;
  const { ext, base } = path.parse(url);
  let file;
  if (/\.js$/.test(ext)) {
    file = path.resolve('dist/static/js', base);
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    const context = fs.readFileSync(file);
    res.end(context);
    return;
  } else if (/\.css$/.test(ext)) {
    file = path.resolve('dist/static/css', base);
    res.writeHead(200, { 'Content-Type': 'text/css' });
    const context = fs.readFileSync(file);
    res.end(context);
    return;
  } else if (/\.(jpe?g|png|bmp|gif)$/.test(ext)) {
    file = path.resolve('dist/static/images', base);
    res.writeHead(200, { 'Content-Type': `image/${ext.slice(1)}` });
    const context = fs.readFileSync(file);
    res.end(context);
    return;
  }
  next();
})
// 获取请求的参数
app.use(async (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const { query } = parseURL(url, true);
  if (method === 'GET') {
    req.body = query;
  } else if (method === 'POST') {
    req.body = await getRequestBody(req, res);
  }
  next();
});
// 展示当前页面内容
app.use(async (req, res, next) => {
  const { url, method } = req;
  console.log(url);
  const { pathname } = parseURL(url, true);
  if (pathname === '/index.html' && method === 'GET') {
    const html = fs.readFileSync(path.resolve('dist/index.html'));
    return res.end(html);
  }
  next();
});
// 执行发布
app.use(async (req, res, next) => {
  if (req.method === 'GET') return next();
  console.log(req.url);
  console.log(req.body.head_commit);
  console.log(req.body.ref);

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

app.listen(3001, function() {
  console.log('start success');
})