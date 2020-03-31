import React from 'react';
import Root from './Root';
import Routs from './routes';
import * as serviceWorker from '../assets/serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { browserHistory } from './route/history';
import { Router } from 'react-router-dom';
import './styles/main.scss';

const rootElement = document.getElementById('root');

const App = (
  <Root>
    <Router history={browserHistory}>
      <HelmetProvider>
        <Routs />
      </HelmetProvider>
    </Router>
  </Root>
);

const func = rootElement.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;
func(App, rootElement);

serviceWorker.register();
