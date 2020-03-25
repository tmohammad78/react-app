// Dependencies
const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpack = require('webpack');
// Utils
const { isMobile, isBot } = require('../shared/utils/device');
// Client Render
const clientRender = require('./render/clientRender');
// Webpack Configuration
const webpackConfig = require('../../webpack.config');
// Environment
const isProduction = process.env.NODE_ENV === 'production';
// Express Application
const app = express();
// Webpack Compiler
const compiler = webpack(webpackConfig);

// Public directory
app.use(express.static(path.join(__dirname, '../../public')));
// Device Detection
app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent']);
  // We detect if a search bot is accessing...
  req.isBot = isBot(req.headers['user-agent']);
  next();
});
// Webpack Middleware
if (!isProduction) {
  // Hot Module Replacement
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
} else {
  // GZip Compression just for Production
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}
// Client Side Rendering
app.use(clientRender());
if (isProduction) {
  try {
    // eslint-disable-next-line
    const serverRender = require('../../dist/server.js').default;
    app.use(serverRender());
  } catch (e) {
    throw e;
  }
}
// For Server Side Rendering on Development Mode
app.use(webpackHotServerMiddleware(compiler));
// Disabling x-powered-by
app.disable('x-powered-by');
// Listen Port...
app.listen(3000);
