const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

const compiler = webpack(webpackConfig);

if (!isProduction) {
  //   app.use(webpackDevMiddleware(compiler));
  //   app.use(webpackHotMiddleware(compiler));
} else {
  //public directory
  app.use(express.static('../assets'));
  // GZip Compression just for Production
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '../dist',
    serverSideRender: true
  })
);

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.disable('x-powered-by');

app.listen(3000, () => {
  console.log(`😎 Server is listening on port 3000`);
});
