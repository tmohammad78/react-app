import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import Routs from './routes';
import * as serviceWorker from '../assets/serviceWorker';
import './styles/main.scss';

const rootElement = document.getElementById('root');
const renderApp = Component => {
  render(
    <AppContainer>
      <Root>
        <Component />
      </Root>
    </AppContainer>,
    rootElement
  );
};

renderApp(Routs);

if (module.hot) {
  module.hot.accept('./app.js', () => {
    renderApp(require('./app').default);
  });
}
serviceWorker.register();

// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
// renderMethod(
//   <Root>
//     <Routs />
//   </Root>,
//   document.getElementById('root')
// );
