import React, { Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { themes } from './Theme/theme';
import { GlobalStyles } from './Theme/global';
import PrivateRoute from './Route/private';
import { browserHistory } from './Route/history';
import Spinner from 'Components/Spinner';
import AuthPage from './Pages/auth';
import Order from './Pages/order';

const App = () => {
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? themes.light : themes.dark;
	if (!componentMounted) {
		return <div />;
	}
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Suspense fallback={<Spinner />}>
				<Router history={browserHistory}>
					<Switch>
						<PrivateRoute path='/' toggleTheme={toggleTheme} component={Order} />
						<Route path='/auth' component={AuthPage} />
					</Switch>
				</Router>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
