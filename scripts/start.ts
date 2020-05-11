/* eslint-disable no-console */
process.env.NODE_ENV = 'development';
process.env.PUBLIC_URL = process.env.PUBLIC_URL || '';

require('@babel/register')({
	"presets": ["@babel/preset-env"],
	plugins: [
		'dynamic-import-node'
	]
});

const chalk = require('chalk');
const clearConsole = require('react-dev-utils/clearConsole');
const express = require('express');
const openBrowser = require('react-dev-utils/openBrowser');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const Config = require('../webpack/webpack.dev');

const {
	choosePort,
	prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils');
// import { applyDevMiddleware } from './utils/devMiddleWare';

// const { applyDevMiddleware } = require('./utils/devMiddleware');
// const { purgeCacheOnChange } = require('./utils/purgeCacheOnChange');

process.on('unhandledRejection', err => {
	throw err;
});

const DEFAULT_PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const isInteractive = process.stdout.isTTY;
const server = express();


const compiler = webpack(Config);
server.use(
	webpackDevMiddleware(compiler, {
		hot: true,
		publicPath: '/',
		progress: true,
		stats: {
			colors: true,
			assets: true,
			chunks: false,
			modules: false,
			hash: false
		}
	})
);

server.use(
	webpackHotMiddleware(
		compiler.compilers.find(compiler => compiler.name === 'client'),
		{
			path: '/__webpack_hmr',
			heartbeat: 4000
		}
	)
);

server.use((req, res) => {
	const app = require('../src/server/server.ts');
	app(req, res);
});

choosePort(HOST, DEFAULT_PORT).then(port => {
	if (!port) {
		return;
	}
	const urls = prepareUrls('http', HOST, port);
	server.listen(port, HOST, err => {
		if (err) {
			return console.log(err);
		}
		if (isInteractive) {
			clearConsole();
		}
		console.log(chalk.white('\n\tStarting dev server...'));
		openBrowser(urls.localUrlForBrowser);
		// purgeCacheOnChange(path.resolve(__dirname, '../'));
		console.log(
			chalk.blue(`
        Running locally at ${urls.localUrlForBrowser}
        Running on your network at ${urls.lanUrlForConfig}:${port}
      `)
		);
	});
});
