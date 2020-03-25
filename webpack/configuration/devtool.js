const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = isDevelopment ? 'cheap-module-source-map' : 'eval';
