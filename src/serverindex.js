import React from 'react';
import Root from './Root';
import Routs from './routes';
import ReactDOMServer from 'react-dom/server';
import * as serviceWorker from '../assets/serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { browserHistory } from './route/history';
import { StaticRouter } from 'react-router-dom';
import Index from './template/Index';
import './styles/main.scss';

const rootElement = document.getElementById('root');
let helmetContext = {};
const view = (
  <Root>
    <StaticRouter history={browserHistory}>
      <HelmetProvider context={helmetContext}>
        <Routs />
      </HelmetProvider>
    </StaticRouter>
  </Root>
);

const renderView = ReactDOMServer.renderToString(view);

let response = <Index renderedView={renderView} helmet={helmetContext.helmet} />;
response = ReactDOMServer.renderToString(response);
response = '<!DOCTYPE html>' + response;
const func = rootElement.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;
func(App, rootElement);

serviceWorker.register();
