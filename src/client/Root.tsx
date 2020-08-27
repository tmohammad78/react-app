import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { IApplicationState } from './Redux/reducers';
import 'lazysizes';

interface props {
  children: React.ReactNode;
  initialState?: IApplicationState | object;
}

const Root: React.SFC<props> = ({ children, initialState = {} }): JSX.Element => {
  initialState = window.__INITIAL_STATE__;
  delete window.__INITIAL_STATE__;
  return <Provider store={store(initialState)}>{children}</Provider>;
};

export default Root;
