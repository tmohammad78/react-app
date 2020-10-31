import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { IApplicationState } from './Redux/reducers';
import 'lazysizes';

interface IProps {
	children: React.ReactNode;
	initialState?: IApplicationState | object;
}

const Root: FunctionComponent<IProps> = ({ children, initialState = {} }): JSX.Element => (
	<Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
