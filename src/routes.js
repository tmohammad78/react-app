import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import PrivateRoute from './route/private';
import Order from './pages/order';
import Header from './component/Header';
import Footer from './component/Footer';
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
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

        <Header toggleTheme={toggleTheme} />
        <Router history={browserHistory}>
          <Switch>
            <PrivateRoute exact path='/' component={Order} />
            <Route path='/auth' component={AuthPage} />
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
