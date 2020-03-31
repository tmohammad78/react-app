const path = require('path');
module.exports = {
  filename: './static/[name].app.js',
  path: path.resolve(__dirname, '../../dist'),
  publicPath: '/dist/'
};
