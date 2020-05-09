process.env.NODE_ENV = 'development';

const express = require('express')
const webpack = require('webpack')
const config = require('../../webpack/development');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const path = require('path');

const app = express()

// static files
app.use(express.static(path.resolve(__dirname, '../../dist')))

// create webpack compiler
const compiler = webpack(config)

// make bundled project source files accessable from memory
app.use(webpackDevMiddleware(compiler, {
	publicPath: '/dist',
	serverSideRender: true
}))

// recompile webpack when file changes
app.use(webpackHotMiddleware(compiler.compilers.find((compiler) => compiler.name === 'client')))

// hot update Webpack bundles on the server
app.use(webpackHotServerMiddleware(compiler))



// run server
const PORT = process.env.PORT || 8000;

app.listen(PORT, (error) => {
	if (error) {
		return console.error('Error in server/development.js: ', error);
	} else {
		console.log(`development server running at http://localhost:${PORT}`);
	}
})