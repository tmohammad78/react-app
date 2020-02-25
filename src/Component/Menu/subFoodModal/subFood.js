import React from 'react';
import PropTypes from 'prop-types';

import DetailModal from '../FoodListTable/food/foodModal';
import FoodDetails from '../FoodListTable/food/details-holder';
import { FoodItem } from '../FoodListTable/food/style';
import { SubFoodStyle } from './style.js';
const SubFood = ({ subfood }) => {
  return (
    <SubFoodStyle>
      <DetailModal subfood={true} defaultDetail={subfood} food={subfood} />
      <div>
        {subfood.subFoods.map((food, i) => {
          return (
            <FoodItem key={food.catId}>
              <section>
                <FoodDetails food={food} />
              </section>
            </FoodItem>
          );
        })}
      </div>
    </SubFoodStyle>
  );
};

SubFood.propTypes = {
  itemFood: PropTypes.array
};

export default SubFood;
{
  /* <FoodImage image={food.img}  /> */
}
