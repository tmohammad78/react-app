import React from "react";
import { Provider } from "react-redux";
import store from './client/Redux/store';
import { IApplicationState } from './client/Redux/reducers';
import 'lazysizes';

interface props {
	children: React.ReactNode;
	initialState?: IApplicationState | object;
}

const Root: React.SFC<props> = ({ children, initialState = {} }): JSX.Element => (
	<Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
