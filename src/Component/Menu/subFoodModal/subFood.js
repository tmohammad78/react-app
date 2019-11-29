import React from 'react';
import PropTypes from 'prop-types';

import DetailModal from '../FoodListTable/food/foodModal';
import FoodDetails from '../FoodListTable/food/details-holder';

const SubFood = ({ subfood }) => {
  return (
    <div className='subFood clearfix'>
      <DetailModal subfood={true} defaultDetail={subfood} food={subfood} />
      <div>
        {subfood.subFoods.map(food => {
          return (
            <div className='food-item'>
              <section>
                <FoodDetails food={food} />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SubFood.propTypes = {
  itemFood: PropTypes.array
};

export default SubFood;
{
  /* <FoodImage image={food.img}  /> */
}
