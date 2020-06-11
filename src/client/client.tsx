import React, { Suspense } from "react";
import { render, hydrate } from 'react-dom';
import thunk from 'redux-thunk';
import Loadable from 'react-loadable';
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';
import { Switch, Router } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';

import * as serviceWorker from './serviceWorker';
import Routes from './Route/Routes';
// import Spinner from './Components/Spinner/index'
const Spinner = require('./Components/Spinner/index.tsx');
import { browserHistory } from './Route/history';
import newRootReducer from './Redux/reducers';
import Head from './Head';

import './styles/main.scss';

const middleware = [thunk];
let enhancer;

enhancer = compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
delete window.__INITIAL_STATE__;
const storeRoot = createStore(newRootReducer, window.__INITIAL_STATE__, enhancer)

const Application = (
	<Provider store={storeRoot}>
		<Head />
		<Suspense fallback={<Spinner />}>
			<Router history={browserHistory}  >
				<Switch>
					{renderRoutes(Routes)}
				</Switch>
			</Router>
		</Suspense>
	</Provider>
)
const root = document.getElementById('root');
export const main = () => {
	Loadable.preloadReady().then(() => {
		if (root?.hasChildNodes() === true) {
			hydrate(Application, root)
		} else {
			render(Application, root)
		}
		serviceWorker.register();
	})
}