// import webpack from 'webpack';

// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import Config from '../../webpack/webpack.dev';

export const applyDevMiddleware = app => {
	console.log('dddd')
	const compiler = webpack(Config);
	app.use(
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

	app.use(
		webpackHotMiddleware(
			compiler.compilers.find(compiler => compiler.name === 'client'),
			{
				path: '/__webpack_hmr',
				heartbeat: 4000
			}
		)
	);
};
// export default applyDevMiddleware;
// module.exports =  applyDevMiddleware ;