const ReactDOMServer = require('react-dom/server');
const path = require('path');
const fs = require('fs');
const express = require('express');
const App = require('../src/app');
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('./dist/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});

// const port = 8001;

// app.get('/api/products', (req, res) => {
//   res.sendFile(path.join(__dirname, 'data', 'products.json'));
// });

// app.listen(port, () => {
//   console.log(`[products] API listening on port ${port}.`);
// });
