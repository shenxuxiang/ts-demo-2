const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

function static (staticPath) {
  return async function (req, res, next) {
    const { ext, base } = path.parse(req.url);
    let file;
    if (/^\.js$/.test(ext)) {
      file = path.join(staticPath, 'js', base);
      res.writeHead(200, { 
        'Content-Type': 'text/javascript',
        'Content-Encoding': 'gzip',
      });
      const readStream = fs.createReadStream(file);
      readStream.pipe(zlib.createGzip()).pipe(res);
      
    } else if (/^\.css$/.test(ext)) {
      file = path.join(staticPath, 'css', base);
      res.writeHead(200, { 
        'Content-Type': 'text/css',
        'Content-Encoding': 'gzip',
      });
      const readStream = fs.createReadStream(file);
      readStream.pipe(zlib.createGzip()).pipe(res);

    } else if (/^\.(jpe?g|png|bmp|gif)$/.test(ext)) {
      file = path.join(staticPath, 'images', base);
      res.writeHead(200, { 'Content-Type': `image/${RegExp.$1}` });
      const readStream = fs.createReadStream(file);
      readStream.pipe(res);
      
    } else if (/^\.(woff|woff2|eot|ttf|svg|)$/.test(ext)) {
      file = path.join(staticPath, 'font', base);
      res.writeHead(200, { 
        'Content-Type': `text/${RegExp.$1}`,
        'Content-Encoding': 'gzip',
      });
      const readStream = fs.createReadStream(file);
      readStream.pipe(zlib.createGzip()).pipe(res);
    }
    return next();
  }
}

module.exports = static;
