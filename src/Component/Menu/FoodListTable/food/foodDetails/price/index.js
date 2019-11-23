import React from 'react';
import PropTypes from 'prop-types';
import { currency } from 'helper';
import './style.scss';

const Price = ({ price }) => {
  return (
    <span className='price'>
      <small>{price ? currency(price) : ''}</small>
    </span>
  );
};

Price.propTypes = {
  price: PropTypes.string
};

export default Price;
