import React from 'react';
import PropTypes from 'prop-types';

const FoodBadge = ({ food }) => {
  return (
    <div className='quantity-badge transition-all'>
      <span>{food.quantity > 0 ? food.quantity : null}</span>
    </div>
  );
};
FoodBadge.propTypes = {
  food: PropTypes.object
};
export default FoodBadge;
