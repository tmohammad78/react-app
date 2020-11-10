const commonVariables = require('./commonVariables');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;
module.exports = [
	{
		mode: 'development',
		devtool: 'eval',
		entry: {
			app: [
				`${commonVariables.appEntry}/index.tsx`
			]
		},
		output: {
			chunkFilename: '[name].fa.js',
			filename: 'main.js',
			publicPath: '/',
			path: `${commonVariables.outputPath}`
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss', '.css']
		},
		module: {
			rules: [
				{
					test: /\.(js|ts)x?$/,
					exclude: /node_modules/,
					use: [{ loader: 'babel-loader' }]
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{ loader: 'style-loader' },
						{
							loader: 'css-loader', options: {
								importLoaders: 1
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								postcssOptions: {
									config: path.resolve(__dirname, '../postcss.config.js')
								}

							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},

				{
					test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
					loader: 'url-loader?limit=8000&name=images/[name].[ext]'
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
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Food Delivery',
				template: 'assets/index.html',
				favicon: 'assets/favicon.ico'
				// cache: true,
			})
		],
		devServer: {
			host: 'localhost',
			port: PORT,
			historyApiFallback: true,
			hot: true,
			open: true,
			contentBase: path.join(__dirname, 'dist'),
			publicPath: '/' // here's the change
		}
	}
];
