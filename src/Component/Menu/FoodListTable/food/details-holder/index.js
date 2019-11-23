import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from '../foodDetails/ingredient';
import Price from '../foodDetails/price';
import QtyHolder from '../foodDetails/qty-holder';
import Tittle from '../foodDetails/Tittle';
import './style.scss';

const Details = ({ food }) => {
  return (
    <div className='details-holder clearfix'>
      <Tittle tittle={food.title} />
      <Ingredient ingredient={food.ingredient} />
      <Price price={food.price} />
      <QtyHolder food={food} />
    </div>
  );
};

Details.propTypes = {
  food: PropTypes.object
};
export default Details;
