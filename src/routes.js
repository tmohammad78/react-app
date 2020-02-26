import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import PrivateRoute from './route/private';
import Order from './pages/order';
import AuthPage from 'pages/auth';
import browserHistory from './route/history';
import Home from './pages/home';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router history={browserHistory}>
        <Switch>
          <PrivateRoute exact path='/' toggleTheme={toggleTheme} component={withRouter(Order)} />
          <Route path='/auth' component={withRouter(AuthPage)} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
