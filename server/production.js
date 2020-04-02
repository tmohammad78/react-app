process.env.NODE_ENV = 'production';
const express = require('express');
const serverRenderer = require('../dist/static/server.app.js').default;
const DIST_ROUTE = '/dist';
const DIST_PATH = path.resolve(process.cwd(), '.' + DIST_ROUTE);
//express app
const app = express();

app.use('../dist', express.static(DIST_PATH));

app.use(express.static('public'));

app.use(serverRenderer());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, error => {
  if (error) return console.error('Error in server/production.js: ', error);
  else console.log(`production server running at http://localhost:${process.env.PORT}`);
});
