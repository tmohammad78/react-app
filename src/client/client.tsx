import React, { Suspense } from "react";
import { render, hydrate } from 'react-dom';
import { renderRoutes } from 'react-router-config';
// import * as serviceWorker from '../assets/serviceWorker';
import './styles/main.scss';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Routes from './Route/Routes';
import Root from './Root';
import Spinner from './Components/Spinner/index'
import { browserHistory } from './Route/history';

// const history = createMemoryHistory();

const Application = (
	<Root>
		<Suspense fallback={<Spinner />}>
			<Router history={browserHistory}>
				<Switch>
					{renderRoutes(Routes)}
				</Switch>
			</Router>
		</Suspense>
	</Root>
)
const root = document.getElementById('root');

if (root?.hasChildNodes() === true) {
	hydrate(Application, root)
} else {
	render(Application, root)
	// serviceWorker.unregister();
}
