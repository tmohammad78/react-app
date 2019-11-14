import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './style.scss';
import { addFood, removeFood } from '../../../../services/cart/actions';
import Details from './details-holder/index';
import FoodImage from './foodImage';
import FoodBadge from './FoodBadge/index';

const Food = ({ food, onShowsubFoodModal }) => {
  const className = [];
  const dispatch = useDispatch();
  if (food.quantity > 0) {
    className.push('active-box');
  }
  if (food.subFoods.length > 0) {
    className.push('has_sub');
  }
  const addClicked = () => {
    if (food.subFoods.length > 0) {
      onShowsubFoodModal(food);
    } else {
		debugger
      dispatch(addFood(food, 1));
    }
  };

  return (
    <div className='food-item'>
      <section
        className={className.map(item => {
          return item;
        })}
      >
        <FoodBadge food={food} />
        <FoodImage food={food} />
        <Details food={food} addClicked={addClicked} removeFood={() => removeFood(food)} />
      </section>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.object.isRequired,
  addFood: PropTypes.func.isRequired,
  removeFood: PropTypes.func.isRequired,
  onShowsubFoodModal: PropTypes.func
};

export default Food;
