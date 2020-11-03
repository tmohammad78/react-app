import React, { Suspense } from 'react';
import { Switch, Router, BrowserRouter } from 'react-router-dom';
import browserHistory from './route/history';
import Spinner from './Components/Spinner/index';
import Routes from './route/routes';
import Order from './pages/order';

const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			{/*<Router history={browserHistory}>*/}
			<BrowserRouter>
				<Switch>
					<Order toggleTheme="dark" />
					{/*{*/}
					{/*	Routes.map(({ path, component }, key) => {*/}
					{/*		return (*/}
					{/*			<Router path={path} component={component} key={key} />);*/}
					{/*	})*/}
					{/*}*/}
				</Switch>
			</BrowserRouter>
			{/*</Router>*/}
		</Suspense>
	);
};

export default App;
