process.env.NODE_ENV = 'development';
process.env.PUBLIC_URL = process.env.PUBLIC_URL || '';

import chalk from 'chalk';
import clearConsole from 'react-dev-utils/clearConsole';
import express from 'express';
import openBrowser from 'react-dev-utils/openBrowser';
import {
	choosePort,
	prepareUrls
} from 'react-dev-utils/WebpackDevServerUtils'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// import Config from '../webpack/webpack.dev';
const Config = require('../webpack/webpack.dev')

const DEFAULT_PORT: number = parseInt(process.env.PORT ? process.env.PORT : '') || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const server = express();


const compiler = webpack(Config);

server.use(
	webpackDevMiddleware(compiler, {
		publicPath: '/',
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
		// @ts-ignore
		compiler.compilers.find((Compiler: any) => Compiler.name === 'client'),
		{
			path: '/__webpack_hmr',
			heartbeat: 4000
		}
	)
);

// import { applyDevMiddleware } from './utils/devMiddleware';
// applyDevMiddleware(server)
import { app } from '../server/server';
server.use((req: any, res: any) => {
	app(req, res);
});

choosePort(HOST, DEFAULT_PORT).then((port: any) => {
	if (!port) {
		return;
	}
	const urls = prepareUrls('http', HOST, port);
	server.listen(port, HOST, (err: any) => {
		if (err) {
			return console.log(err);
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
