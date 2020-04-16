import React, { Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './Hooks/useDarkMode';
// import { themes } from './Theme/theme';
// import { GlobalStyles } from './Theme/global';
// import { ThemeProvider, createGlobalStyle } from './Theme/styled-components';
import PrivateRoute from './Route/private';
import { browserHistory } from './Route/history';
import Spinner from './Components/Spinner/index';
import AuthPage from './Pages/auth/index';
import Order from './Pages/order/index';

// const GlobalStyles = createGlobalStyle`
//   *,
//   *::after,
//   *::before {
//     box-sizing: border-box;
//   }
//   body {
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: ${({ theme }) => theme.lightTheme.body};
//     color: ${({ theme }) => theme.lightTheme.text};
//     padding: 0;
//     margin: 0;
//   }
//   a {
//     color: ${({ theme }) => theme.lightTheme.text};
//   }
//   .white-box {
// 	background-color: ${({ theme }) => theme.lightTheme.whitebg};
// 	border: 1px solid #e4e4e4;
//   }
// `;

const App = () => {
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	// const themeMode = theme === 'light' ? theme : themes.dark;
	const themeMode = 'light';
	if (!componentMounted) {
		return <div />;
	}
	

	return (
		// <ThemeProvider theme='light'>
		// <GlobalStyles />
		<Suspense fallback={<Spinner />}>
			<Router history={browserHistory}>
				<Switch>
					<PrivateRoute exact path='/' toggleTheme={toggleTheme} component={Order} />
					<Route path='/auth' component={AuthPage} />
				</Switch>
			</Router>
		</Suspense>
		// </ThemeProvider>
	);
};

export default App;
