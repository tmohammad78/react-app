import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, withRouter, useLocation } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import PrivateRoute from './route/private';
import Order from './pages/order';
import AuthPage from 'pages/auth';
import { browserHistory } from './route/history';
import Home from './pages/home';
import { useSelector, useDispatch } from 'react-redux';

function App(props) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const logged = useSelector(state => state.auth.logged);
  const [render, setRender] = useState(false);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const dispatch = useDispatch();
  console.log('redner inner');
//   useEffect(() => {
//     browserHistory.listen((location, action) => console.log('History changed!', location, action));
//     console.log(browserHistory);
//     if (browserHistory.location.pathname == '/' && logged) {
//       setRender(true);
//     }
//   }, [browserHistory]);
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
