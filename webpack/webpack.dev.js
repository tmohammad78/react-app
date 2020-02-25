const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const commonVariables = require('./commonVariables');
const path = require('path');

const PORT = process.env.PORT || 8080;
module.exports = [
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
      app: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        // "webpack-hot-middleware/client",
        // "react-hot-loader/patch",
        `${commonVariables.appEntry}/index.js`
      ]
    },
    output: {
      // chunkFilename: `[name].${language}.js`
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')

      //   path: `${commonVariables.publicPath}`,
      //   filename: 'server.js'
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: true,
                plugins: () => [
                  autoprefixer({
                    // browsers: [
                    //   ">1%",
                    //   "last 4 versions",
                    //   "Firefox ESR",
                    //   "not ie < 9"
                    // ]
                  })
                ]
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
          test: /\.(png|woff|woff2|eot|ttf|jpe?g|gif)$/,
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
    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
    devServer: {
      host: 'localhost',
      port: PORT,
      historyApiFallback: true,
      // hot: true,
      open: true
    }
  }
];
