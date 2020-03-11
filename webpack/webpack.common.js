const commonVariables = require('./commonVariables');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDORS_LIB = ['react', 'react-dom', 'react-router-dom'];

module.exports = [
  {
    output: {
      path: commonVariables.outputPath,
      filename: `./static/[name].app.js`
      //publicPath: commonVariables.publicPath
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' }
            // { loader: "eslint-loader" }
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
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
      new HtmlWebpackPlugin({
        title: 'Food Delivery',
        template: 'assets/index.html',
        favicon: 'assets/favicon.ico',
        cache: true
      })
    ]
  }
];
