import express from 'express';
import createStore from '../Helper/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Route/Routes';
import renderer from '../Helper/render';
import path from 'path';

const app = express();
console.log('mohammad');

app.use(require('webpack-dev-middleware')());
console.log('testing in server')
app.use(express.static(path.resolve(__dirname, '../../lib')));
app.use(express.static(path.resolve('../../asssets')))
console.log('after the lib ');

app.get("*", (req, res) => {
	console.log('testing in server')
	const store = createStore(req);
	console.log('dd');
	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : Promise.resolve(null);
		})
		.map((promise) => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});

	Promise.all(promises)
		.then(() => {

			const context = {};
			const content = renderer(req, store, context);

			if (context.url) {
				return res.redirect(301, context.url);
			}
			if (context.notFound) {
				res.status(404);
			}
			res.send(content);
		})
		.catch((err) => {
			res.send(`an Error ${err} `);
		});
})

app.listen(3000, () => {
	console.log('serverrr is runnig in port 3000')
})