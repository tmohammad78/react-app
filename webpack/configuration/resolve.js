const path = require('path');
module.exports = {
  extensions: ['.js', '.jsx'],
  modules: [
    'node_modules',
    path.resolve(__dirname, '../../src/client'),
    path.resolve(__dirname, '../../src/server')
  ]
};
