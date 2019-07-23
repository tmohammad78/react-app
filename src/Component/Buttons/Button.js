import React from 'react';
import PropTypes from 'prop-types';

const Button = params => {
  const { outline, children, color, size, disabled, ...props } = params;
  let OutLine;
  if (!outline) {
    OutLine = '';
  } else {
    OutLine = 'btn-outline';
  }
  let Disable;
  if (disabled) {
    Disable = 'disabled';
  } else {
    Disable = '';
  }
  return (
    <button
      type='button'
      className={`btn  ${OutLine} btn-${color} btn-${size} ${Disable}  `}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'default',
  outline: true,
  disabled: false
};

Button.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
  // onClick: PropTypes.func
};

export default Button;
