import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'component/Buttons/Button';

import './style.scss';

const Selectbox = ({ handleOnChange }) => {
  const options = [
    { value: '', label: 'Select', index: 1 },
    { value: 'lowestprice', label: 'ارزان ترین', index: 2 },
    { value: 'highestprice', label: 'گران ترین', index: 3 }
  ];

  const [checkactive, setActive] = useState({
    1: true,
    2: false,
    3: false
  });

  const createOptions = option =>
    option.map(item => {
      return (
        <li>
          <Button
            bgcolor={checkactive[parseInt(item.index)] ? '#FF7714' : 'transparent'}
            color={checkactive[parseInt(item.index)] ? '#FFF' : '#333'}
            onClick={onClicked}
            value={item.value}
            name={item.index}
          >
            {item.label}
          </Button>
        </li>
      );
    });

  const onClicked = e => {
    setActive({ [1]: false });
    setActive({ [e.target.name]: true });
    handleOnChange(e.target.value);
  };

  return (
    <div className='sort'>
      <span>مرتب سازی براساس :</span>
      <ul>{createOptions(options)}</ul>
    </div>
  );
};

Selectbox.propTypes = {
  handleOnChange: PropTypes.func.isRequired
};

export default Selectbox;
