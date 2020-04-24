const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    entry: {
      app: [
        // 'core-js/stable',
        'regenerator-runtime/runtime', // it was an error in @babel/runtime in starting project
        // 'webpack-hot-middleware/client',
        // 'react-hot-loader/patch',
        // `${commonVariables.appEntry}/index.tsx`,
        path.resolve(__dirname, '../src/client/client.tsx'),
      ],
    },
    output: {
      //   chunkFilename: '[name].fa.js',
      filename: 'build.js',
      publicPath: '/',
      path: path.resolve(__dirname, '../lib'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: path.resolve(__dirname, '../postcss.config.js'),
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },

        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|jpe?g|gif)$/,
          loader: 'url-loader?limit=8000&name=images/[name].[ext]',
        },
      ],
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      //   new HtmlWebpackPlugin({
      //     title: 'Food Delivery',
      //     template: 'assets/index.html',
      //     favicon: 'assets/favicon.ico',
      //     // cache: true,
      //   }),
    ],
    // devServer: {
    //   host: 'localhost',
    //   port: PORT,
    //   historyApiFallback: true,
    //   hot: true,
    //   open: true,
    //   contentBase: path.join(__dirname, 'dist'),
    //   publicPath: '/', // here's the change
    // },
  },
];
