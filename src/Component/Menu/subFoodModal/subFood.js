import React from 'react';
import PropTypes from 'prop-types';
import Food from '../FoodListTable/food/index';

const SubFood = props => {
  const { addFood, removeFood, item } = props;
  return (
    <div className='subFood'>
      <h4>{item.title}</h4>
      {item.subFoods.map(food => {
        return <Food food={food} addFood={addFood} removeFood={removeFood} />;
      })}
    </div>
  );
};

SubFood.propTypes = {
  item: PropTypes.array,
  addFood: PropTypes.func,
  removeFood: PropTypes.func
};

export default SubFood;
