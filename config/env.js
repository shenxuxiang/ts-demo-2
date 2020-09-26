// html 环境变量
const raw = {
  PUBLIC_PATH: process.env.NODE_ENV === 'development' ? '/' : 'ts-demo-2/',
  SERVER_ORIGIN: 'http\:\/\/localhost\:3001\/',
};

// js环境变量
const stringified = {
  'process.env': Object.keys(raw).reduce((a, key) => {
    a[key] = JSON.stringify(raw[key]);
    return a;
  }, {}),
};

module.exports = {
  raw,
  stringified,
};
