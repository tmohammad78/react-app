const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = isDevelopment ? 'development' : 'production';
