import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle, ButtonAnc } from './style';

import './style.scss';

export const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

Button.defaultProps = {
  primary: true
};

// Button.propTypes = {
//   outline: PropTypes.bool,
//   children: PropTypes.string,
//   color: PropTypes.string,
//   size: PropTypes.string,
//   action: PropTypes.bool,
//   name: PropTypes.string
// };

// export const Button;
// export const AncButton;
