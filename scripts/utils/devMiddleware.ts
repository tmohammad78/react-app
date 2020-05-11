// import webpack from 'webpack';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const Config = require('../../webpack/webpack.dev')
export const applyDevMiddleware = (app: any) => {
	console.log('dddd')
	const compiler = webpack(Config);
	app.use(
		webpackDevMiddleware(compiler, {
			publicPath: '/',
			// progress: true,
			serverSideRender: true
			// stats: {
			// 	colors: true,
			// 	assets: true,
			// 	chunks: false,
			// 	modules: false,
			// 	hash: false
			// }
		})
	);

	app.use(
		webpackHotMiddleware(
			compiler.compilers.find((compiler: any) => compiler.name === 'client'),
			{
				path: '/__webpack_hmr',
				heartbeat: 4000
			}
		)
	);
};
// export default applyDevMiddleware;
// module.exports =  applyDevMiddleware ;