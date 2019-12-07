const commonVariables = require("./commonVariables");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const I18nPlugin = require("i18n-webpack-plugin");
const VENDORS_LIB = ["react", "react-dom", "react-router-dom"];

module.exports = Object.keys(commonVariables.languages).map(function(language) {
	return {
		name: language,
		entry: {
			vendor: VENDORS_LIB
		},
		output: {
			path: commonVariables.outputPath,
			filename: `[name].${language}.js`
			//publicPath: commonVariables.publicPath
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						{ loader: "babel-loader" }
						// { loader: "eslint-loader" }
					]
				}
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					//   styles: {
					//     name: "styles",
					//     test: /\.css$/,
					//     chunks: "all",
					//     enforce: true
					//   },
					vendor: {
						chunks: "initial",
						test: "vendor",
						name: "vendor",
						filename: "vendor.js",
						enforce: true
					}
				}
			}
		},
		plugins: [
			new I18nPlugin(commonVariables.languages[language]),
			new HtmlWebpackPlugin({
				// 'meta': {
				//   'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
				//   'theme-color': '#4285f4'
				// },
				// chunks: ['app'],
				template: "assets/index.html"
				//favicon: 'public/favicon.ico'
			})
		]
	};
});
