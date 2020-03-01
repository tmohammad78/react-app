import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './style';

export const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

Button.defaultProps = {
  primary: true
};

Button.propTypes = {
  children: PropTypes.string
};
