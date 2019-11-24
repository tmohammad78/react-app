import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Buttons/Button';
import './style.scss';

const Selectbox = ({ handleOnChange, classes, options }) => {
  //   const arrButton = [{ id: 1, active: false }, { id: 2, active: false }, { id: 3, active: false }];
  //  const objButton = {
  // 	lowestprice:{}
  //  }
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
            bgcolor={checkactive[parseInt(item.index)] ? '#FFBD41' : 'transparent'}
            color={checkactive[parseInt(item.index)] ? 'white' : 'black'}
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
      <ul className={classes}>{createOptions(options)}</ul>
    </div>
  );
};

Selectbox.propTypes = {
  handleOnChange: PropTypes.func.isRequired
};

export default Selectbox;
