import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Buttons/Button';
import './style.scss';

const Selectbox = ({ handleOnChange, classes, options }) => {
  const createOptions = (option) =>
    option.map((item) => {
      return (
        <li>
          <Button onClick={onClicked} value={item.value} size='sm' outline={false}>
            {item.label}
          </Button>
        </li>
      );
    });

  const onClicked = (e) => {
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
