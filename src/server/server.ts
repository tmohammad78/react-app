import express from 'express';
import createStore from '../Helper/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Route/Routes';

import renderer from '../Helper/render';
import path from 'path';

const app = express();

//add the bundle file to the project
app.use(express.static(path.resolve(__dirname, '../lib')));
//add static files in project
app.use(express.static(path.resolve('../../asssets')))

app.get("*", (req, res) => {
	const store = createStore(req);
	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : Promise.resolve(null);
		})
		.map((promise): any => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});
	Promise.all(promises)
		.then(() => {

			const context = {};
			console.log('my store chchch  is', store);
			const content = renderer(req, store, context);
			console.log('cccc', content)
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
// interface Icontext {
// 	url: string | undefined,
// 	notFound: string | undefined
// }

app.listen(3000, () => {
	console.log('serverrr is runnig in port 3000')
})