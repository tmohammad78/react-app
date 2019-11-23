import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { currency } from 'helper';

const FoodBadge = ({ quantity }) => {
  return (
    <div className='quantity-badge transition-all'>
      <span>{quantity > 0 ? currency(quantity, false) : null}</span>
    </div>
  );
};
FoodBadge.propTypes = {
  quantity: PropTypes.string
};
export default FoodBadge;
