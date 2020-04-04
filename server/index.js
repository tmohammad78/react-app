process.env.NODE_ENV = 'development';
const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.development');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const app = express();

// app.use(cors());

//static file
app.use(express.static(path.resolve(__dirname, '../assets')));

const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
	publicPath: '/dist/',
	noInfo: true,
    serverSideRender: true
  })
);

console.log(compiler);

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));
app.disable('x-powered-by');

app.listen(3000, () => {
  console.log(`😎 Server is listening on port 8080`);
});
