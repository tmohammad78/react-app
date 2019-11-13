import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './style';

import './style.scss';

const Button = ({ children, color, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

Button.defaultProps = {
  primary: true,
};

// Button.propTypes = {
//   outline: PropTypes.bool,
//   children: PropTypes.string,
//   color: PropTypes.string,
//   size: PropTypes.string,
//   action: PropTypes.bool,
//   name: PropTypes.string
// };

export default Button;
