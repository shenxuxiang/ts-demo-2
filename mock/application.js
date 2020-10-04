const http = require('http');
const EventEmitter = require('events');
const utils = require('./utils');

class Application extends EventEmitter {
  constructor() {
    super();
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn);
    return this;
  }

  callback (req, res) {
    const fns = this.compose(this.middleware);
    fns(req, res)
      .then(() => {
        res.end(res.result || undefined);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  compose(middleware) {
    if (utils.isEmpty(middleware)) return;
    let len = middleware.length;
    return function(req, res) {
      return dispatch(0);

      function dispatch(i) {
        if (i >= len) {
          return Promise.resolve();
        } else {
          const fn = middleware[i++];
          return Promise.resolve(fn(req, res, () => {
            return dispatch(i);
          }));
        }
      }
    };
  }

  listen(port, fn) {
    const server = http.createServer((req, res) => this.callback.call(this, req, res));
    if (typeof fn === 'function') {
      server.listen(port, fn);
    } else {
      server.listen(port);
    }
  }
}

module.exports = Application
