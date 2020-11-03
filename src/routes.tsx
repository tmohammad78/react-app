import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Spinner from './Components/Spinner/index';
import Routes from './route/routes';


const App = () => {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Router>
					<Switch>
						{
							Routes.map(({ path, component }) => {
									return (
										<Route path={path} component={component} key={path} />);
								}
							)
						}
					</Switch>
				</Router>
			</Suspense>
		</>
	);
};

export default App;
