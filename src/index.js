import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './styles/main.scss';

// ReactDOM.hydrate(
//   <App />,
//   document.getElementById('root')
// );

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<App />, document.getElementById('root'));
