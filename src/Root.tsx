import * as React from "react";
import { Provider } from "react-redux";
import store from './services/store';
import 'lazysizes';

export interface props {
	children: React.ReactNode;
	// initialState: object;
}

const Root = ({ children }: props) => (
	<Provider store={store()}>{children}</Provider>
);

export default Root;
