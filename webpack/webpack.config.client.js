const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const {
  context,
  devtool,
  entry,
  name,
  output,
  optimization,
  plugins,
  target
} = require('./configuration');

const type = 'client';

module.exports = webpackMerge(commonConfig(type), {
  context: context(type),
  devtool,
  entry: entry(type),
  name: name(type),
  output: output(type),
  optimization,
  plugins: plugins(type),
  target: target(type)
});
