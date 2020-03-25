const { modules, resolve, mode } = require('./configuration');
module.exports = type => ({
  module: modules(type),
  resolve,
  mode
});
