import * as React from "react";
import { Provider } from "react-redux";
import store from 'services/store';
import { IApplicationState } from 'services/reducers';
import 'lazysizes';

export interface props {
	children: React.ReactNode;
	initialState?: IApplicationState | object;
}

const Root = ({ children, initialState = {} }: props) => (
	<Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
