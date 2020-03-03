import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Router, withRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import PrivateRoute from './route/private';
// import Order from './pages/order';
// import AuthPage from 'pages/auth';
import { browserHistory } from './route/history';
import Spinner from 'component/Spinner';

const AuthPage = lazy(() => import('pages/auth'));
const Order = lazy(() => import('pages/order'));

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  let themeMode;
  useEffect(() => {
    window.addEventListener('devicelight', checklight);
    return function cleanup() {
      window.removeEventListener('devicelight', checklight);
    };
  });
  const checklight = e => {
    console.log(e);
    e.value < 50 ? window.alert('dark') : (themeMode = 'lightTheme');
  };
  themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <Router history={browserHistory}>
          <Switch>
            <PrivateRoute exact path='/' toggleTheme={toggleTheme} component={withRouter(Order)} />
            <Route path='/auth' component={withRouter(AuthPage)} />
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
