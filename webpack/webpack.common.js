const commonVariables = require('./commonVariables');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nPlugin = require('i18n-webpack-plugin');
const VENDORS_LIB = ['react', 'react-dom', 'react-router-dom'];

module.exports = Object.keys(commonVariables.languages).map(function(language) {
  return {
    name: language,
    entry: {
      vendor: VENDORS_LIB
    },
    output: {
      path: commonVariables.outputPath,
      filename: `[name].${language}.js`
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }]
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
            chunks: 'initial',
            test: 'vendor',
            name: 'vendor',
            filename: 'vendor.js',
            enforce: true
          }
        }
      }
    },
    plugins: [
      new I18nPlugin(commonVariables.languages[language]),
      new HtmlWebpackPlugin({
        // it use for add meta tag in index.html
        // 'meta': {
        //   'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        //   'theme-color': '#4285f4'
        // },
        chunks: ['app'], //To include only certain chunks you can limit the chunks being used
        title: 'Food Delivery',
        template: 'assets/index.html',
        favicon: 'assets/favicon.ico', //icon,
        cache: true // using caching
      })
    ]
  };
});
