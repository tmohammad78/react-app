const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const commonVariables = require('./commonVariables');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const PUBLIC_PATH = 'https://food-delivery-7d366.firebaseapp.com/';
module.exports = Object.keys(commonVariables.languages).map(function(language) {
	return {
		mode: 'production',
		devtool: 'source-map',
		entry: {
			app: [`${commonVariables.appEntry}/index.tsx`]
		},
		output: {
			filename: 'main.js',
			chunkFilename: `[name].[chunkhash:8].js`,
			publicPath: '/',
			path: `${commonVariables.outputPath}`
		},
		module: {
			rules: [
				{
					test: /\.(js|ts)x?$/,
					exclude: /node_modules/,
					resolve: {
						extensions: ['.js', 'jsx', '.tsx', '.ts']
					},
					use: [
						{ loader: 'babel-loader' }
					]
				},
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
					test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
					loader: 'url-loader',
					options: {
						name: 'static/images/[name].[ext]'
					}
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
			minimizer: [new TerserPlugin()]
		},
		plugins: [
			// new BundleAnalyzerPlugin(),
			new MiniCssExtractPlugin({
				filename: `static/css/[name].[contenthash].css`,
				chunkFilename: `static/css/[id].[contenthash].css`
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
				title: 'Food Delivery',
				template: 'assets/index.html',
				minify: {
					collapseWhitespace: true
				}
			}),
			new InjectManifest({
				swSrc: path.resolve(process.cwd(), './src/sw.ts'),
				swDest: 'service-worker.js',
				mode: 'production'
			}),
			new WebpackPwaManifest({
				name: 'Food Delivery',
				short_name: 'Food Delivery',
				filename: 'manifest.json',
				description: 'Food Delivery React App',
				start_url: '.',
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
			})
		]
	};
});
