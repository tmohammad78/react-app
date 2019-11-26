import React from 'react';
import PropTypes from 'prop-types';

import Food from '../FoodListTable/food/index';

const SubFood = ({ itemFood }) => {
  return (
    <div className='subFood clearfix'>
      {itemFood.map(food => {
        return <Food food={food} />;
      })}
    </div>
  );
};

SubFood.propTypes = {
  itemFood: PropTypes.array
};

export default SubFood;
