const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const commonVariables = require('./commonVariables');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = Object.keys(commonVariables.languages).map(function(language) {
  return {
    mode: 'production',
    entry: {
      app: ['core-js/stable', 'regenerator-runtime/runtime', `${commonVariables.appEntry}/index.js`]
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
                // minimize: true,
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: false,
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
                data: `$pageDirection: "${commonVariables.languages[language]['langDirection']}";`,
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
                jsx: true // true outputs JSX tags
              }
            }
          ]
        }
      ]
    },
    optimization: {
      concatenateModules: true,
      minimizer: [new UglifyJsPlugin()]
    },

    plugins: [
      new BundleAnalyzerPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new CompressionPlugin(),
      new MinifyPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].' + language + '.css',
        chunkFilename: '[id].' + language + '.css',
        filename: `static/css/[name].[contenthash].css`,
        chunkFilename: `static/css/[id].[contenthash].css`
      }),
      //   webpack.optimize.DedupePlugin

      new HtmlWebpackPlugin({
        // minify: true, // minify html files
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  };
});
