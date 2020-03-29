import path from 'path';
export default {
  filename: './static/[name].app.js',
  path: path.resolve(__dirname, '../../dist'),
  publicPath: '/dist/'
};
