import React, { Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { themes } from './theme/theme';
import { GlobalStyles } from './theme/global';
import PrivateRoute from './route/private';
import { browserHistory } from './route/history';
import Spinner from 'component/Spinner';
import AuthPage from 'pages/auth';
import Order from 'pages/order';
interface Itest {
	theme: string;
	toggleTheme: () => void;
	componentMount: boolean
}
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
