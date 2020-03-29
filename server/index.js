import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
const isProduction = process.env.NODE_ENV === 'production';
import webpackConfig from '../webpack.config.babel';
import clientRender from '../src/render/clientRender';
const app = express();

const compiler = webpack(webpackConfig);

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  //public directory
  app.use(express.static(path.join(__dirname, '../assets')));
  // GZip Compression just for Production
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

//client side rendring

app.use(clientRender());

app.disable('x-powered-by');

app.listen(3000);
