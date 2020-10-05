const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const parseURL = require('url').parse;
const chalk = require('chalk');
const zlib = require('zlib');
const Application = require('./application');
const staticMiddleware = require('./middleware/static');
const queryBodyMIddleware = require('./middleware/query-body');

const app = new Application();

// 静态路由系统
const static = staticMiddleware(path.resolve('dist/static'));
app.use(static);

// 获取请求的参数
const queryBody = queryBodyMIddleware();
app.use(queryBody);

// 展示当前页面内容
app.use(async (req, res, next) => {
  const { url, method } = req;
  const { pathname } = parseURL(url, true);
  if (pathname === '/index.html' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html', 
      'Content-Encoding': 'Gzip',
    });
    const readStream = fs.createReadStream(path.resolve('dist/index.html'));
    return readStream.pipe(zlib.createGzip()).pipe(res);
  }
  next();
});

// 执行打包和发布
app.use(async (req, res, next) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    // 字符串的格式是这样：refs/heads/dev
    const branch = req.body.ref.slice(11);
    const commitMsg =  req.body.head_commit.message;
    if (branch !== 'master' || commitMsg.search(/{{\s?build\s?}}/) < 0) return next();
    console.log(chalk.blue(`正在构建，～ 【commitMsg】`));
    // 执行 shell 命令
    const worker = child_process.spawn('sh', ['./run.sh'], { cwd: path.join(__dirname, '../'), shell: true });
    worker.on('close', function() {
      console.log(chalk.green('构建成功！'));
    });
    worker.on('error', function() {
      console.log(chalk.red('构建失败～'));
    });
  }

  next();
});

app.listen(3001, function() {
  console.log(chalk.green('service opened successfully'));
});
