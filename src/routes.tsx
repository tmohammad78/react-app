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
							Routes.map(({ path, component }, i) => {
									return (
										<Route path={path} component={component} key={i} />);
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
