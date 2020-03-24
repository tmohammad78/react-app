import React from "react";
import { Provider } from "react-redux";
import store from '../src/services/store';
import { IApplicationState } from '../src/services/reducers';
import 'lazysizes';

export interface props {
	children: React.ReactNode;
	initialState?: IApplicationState | object;
}

const Root: React.SFC<props> = ({ children, initialState = {} }): JSX.Element => (
	<Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
