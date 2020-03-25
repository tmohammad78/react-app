// Dependencies
const nodeExternals = require('webpack-node-externals');
module.exports = () => [
  nodeExternals({
    whitelist: [/^redux\/(store|modules)/]
  })
];
