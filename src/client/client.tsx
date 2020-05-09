import React, { Suspense } from "react";
import { render, hydrate } from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
// import * as serviceWorker from '../assets/serviceWorker';
import './styles/main.scss';
import { Switch, Router, BrowserRouter } from 'react-router-dom';
// import Routes from './Route/Routes';
import Root from './Root';
// import store from './Redux/store';
import Spinner from './Components/Spinner/index'
import { browserHistory } from './Route/history';
import { compose, createStore, applyMiddleware } from 'redux';
import newRootReducer from './Redux/reducers';
import { loadableReady } from '@loadable/component'


const middleware = [thunk];
let enhancer;
enhancer = compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
delete window.__INITIAL_STATE__;
const storeRoot = createStore(newRootReducer, window.__INITIAL_STATE__, enhancer)

const Application = (
	// <Root>
	<Provider store={storeRoot}>
		<Suspense fallback={<Spinner />}>
			{/* <Router history={browserHistory}  >
				<Switch>
					{renderRoutes(Routes)}
				</Switch>
			</Router> */}
			<div>flnfdjn</div>
		</Suspense>
	</Provider>
	// </Root>
)
const root = document.getElementById('root');

loadableReady(() => {
	if (root?.hasChildNodes() === true) {
		hydrate(Application, root)
	} else {
		render(Application, root)
		// serviceWorker.unregister();
	}
})
