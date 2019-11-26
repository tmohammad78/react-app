import React, { useState } from 'react';
import './style.scss';

const Input = ({
  type,
  label,
  icon,
  onChange,
  id,
  value,
  onBlur,
  onFocus,
  className,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = e => {
    if (value) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };
  return (
    <div className={`inputParent ${focus ? `focus` : ''}`}>
      {icon ? (
        <div className='image'>
          <img alt={icon} src={`./image/${icon}.svg`} />
        </div>
      ) : null}

      <input
        className={`input ${className ? `input-${type}` : null}`}
        value={value || ''}
        type={type}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={id}
        {...props}
      />
      <label className='input-test' htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
export default Input;
