import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import Routs from './routes';
import './styles/main.scss';
ReactDOM.hydrate(
  <Root>
    <Routs />
  </Root>,
  document.getElementById('root')
);
