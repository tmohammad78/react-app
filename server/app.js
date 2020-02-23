const ReactDOMServer = require('react-dom/server');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const express = require('express');
const devServerIsReady = require('./setup/devServerIsReady.js')
const config = require('../webpack/webpack.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
// const App = require('../src/app');
const cors = require('cors');
const webpack = require('webpack');
const { PUBLIC_NAME, DIST_ROUTE } = require('./setup/constants');
// express app
const app = express();

//cross origin
app.use(cors());



//cookie
app.use(cookieParser());
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    serverSideRender: true,
    publicPath: DIST_ROUTE
  })
);

app.use(express.static(PUBLIC_NAME));

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));

app.use(webpackHotServerMiddleware(compiler));

const PORT = process.env.PORT || 3006;

app.listen(PORT, error => {
    if (error) {
        return console.error('Error in server.development.js: ', error);
    } else {
        // wait to project built and app ready
        devServerIsReady(PORT)
            .then(function () {
                // open project in tab of browser
                open(`http://localhost:${PORT}`);

                console.log(`development server running at http://localhost:${process.env.PORT}`);
            })
    }
})


// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'dist/v-1')));

// app.get('/*', (req, res) => {
//   //   const mainApp = ReactDOMServer.renderToString(<App />);
//   const indexFile = path.resolve('./dist/v-1');
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
//       )
//     );
//   });
// });

// app.listen(PORT, () => {
//   console.log(`😎 Server is listening on port ${PORT}`);
// });

// const port = 8001;

// app.get('/api/products', (req, res) => {
//   res.sendFile(path.join(__dirname, 'data', 'products.json'));
// });

// app.listen(port, () => {
//   console.log(`[products] API listening on port ${port}.`);
// });
