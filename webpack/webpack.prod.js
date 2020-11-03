const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const commonVariables = require('./commonVariables');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const PUBLIC_PATH = 'https://food-delivery-7d366.firebaseapp.com/';
module.exports = Object.keys(commonVariables.languages).map(function(language) {
	return {
		mode: 'production',
		devtool: 'source-map',
		entry: {
			app: [`${commonVariables.appEntry}/index.tsx`]
		},
		output: {
			chunkFilename: `[name].[chunkhash:8].js`
		},
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: false,
								postcssOptions: {
									config: path.resolve(__dirname, '../postcss.config.js')
								}

							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: false
							}
						}
					]
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: 'babel-loader'
						},
						{
							loader: 'react-svg-loader',
							options: {
								jsx: true
							}
						}
					]
				}
			]
		},
		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin()]
		},
		devServer: {
			historyApiFallback: true
		},

		plugins: [
			new BundleAnalyzerPlugin(),
			new FriendlyErrorsWebpackPlugin(),
			new MinifyPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].' + language + '.css',
				chunkFilename: '[id].' + language + '.css',
				filename: `static/css/[name].[contenthash].css`,
				chunkFilename: `static/css/[id].[contenthash].css`
			}),
			new WorkboxPlugin.GenerateSW({
				// these options encourage the ServiceWorkers to get in there fast
				// and not allow any straggling "old" SWs to hang around
				swDest: 'sw.js',
				clientsClaim: true,
				skipWaiting: true
			}),
			//   webpack.optimize.DedupePlugin
			new WebpackPwaManifest({
				name: 'Food Delivery',
				short_name: 'Food Delivery',
				filename: 'manifest.json',
				description: 'Food Delivery React App',
				start_url: './index.html',
				display: 'standalone',
				orientation: 'portrait',
				background_color: '#f0f2f5',
				theme_color: '#FF7714',
				icons: [
					{
						src: path.resolve('assets/react.png'),
						sizes: [96, 128, 192, 256, 384, 512]
					}
				]
			}),
			new SWPrecacheWebpackPlugin({
				cacheId: 'Food-Delivery',
				dontCacheBustUrlsMatching: /\.\w{8}\./,
				filename: 'serviceWorker.js',
				minify: true,
				navigateFallback: PUBLIC_PATH,
				staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
			}),
			new HtmlWebpackPlugin({
				meta: {
					viewport: 'width=device-width, initial-scale=1,viewport-fit=cover, shrink-to-fit=no',
					'theme-color': '#FF7714',
					'apple-mobile-web-app-status-bar-style': '#FF7714',
					'og:title': 'Food Delivery',
					'og:description': 'A simple Boilerplate of React Js',
					'content-type': { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' }
				},
				title: 'Food',
				template: 'assets/index.html',
				minify: true,
				minify: {
					collapseWhitespace: true
				}
			}),
			new HtmlWebpackRootPlugin('root')
		]
	};
});
