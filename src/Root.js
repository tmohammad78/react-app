import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './services/store';

import 'lazysizes';

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object.isRequired
};
export default Root;
