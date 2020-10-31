import React, { Suspense } from 'react';
import { Switch, Router } from 'react-router-dom';
import browserHistory from './route/history';
import Spinner from './Components/Spinner/index';
import Routes from './route/routes';

const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Router history={browserHistory}>
				<Switch>
					{
						Routes.map(({ path, component }, key) => {
							return (
								<Router path={path} component={component} key={key} />);
						})
					}
				</Switch>
			</Router>
		</Suspense>
	);
};

export default App;
