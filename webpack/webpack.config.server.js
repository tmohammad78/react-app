// Dependencies
const webpackMerge = require('webpack-merge');
// Webpack Configuration
const commonConfig = require('./webpack.config.common');
// Configuration
const { context, entry, externals, name, output, plugins, target } = require('./configuration');
// Type of Configuration

const type = 'server';

module.exports = webpackMerge(commonConfig(type), {
  context: context(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
