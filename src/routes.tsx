import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Spinner from './Components/Spinner/index';
import Routes from './route/routes';
import { GlobalStyles } from './theme/global';
import ThemeProviderApp from './themeProvider';

const App = () => {
	return (
		<ThemeProviderApp>
			<GlobalStyles />
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
		</ThemeProviderApp>
	);
};

export default App;
