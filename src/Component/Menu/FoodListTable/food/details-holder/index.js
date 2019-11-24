import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Ingredient from '../foodDetails/ingredient';
import Price from '../foodDetails/price';
import QtyHolder from '../foodDetails/qty-holder';
import Tittle from '../foodDetails/Tittle';
import LikeFood from '../foodDetails/likeFood';
import { addFoodLike } from 'services/likeFood/action';
import './style.scss';

const Details = ({ food }) => {
  const dispatch = useDispatch();

  const handleLikeFood = () => {
    dispatch(addFoodLike(food));
  };

  const Detail = () => {
    return (
      <React.Fragment>
        <Tittle tittle={food.title} />
        <Ingredient ingredient={food.ingredient} />
        <Price price={food.price} />
        <LikeFood handleLikeFood={handleLikeFood} />
      </React.Fragment>
    );
  };
  const renderDefault = useMemo(() => {
    return <Detail />;
  }, Detail);
  return (
    <div className='details-holder clearfix'>
      {renderDefault}
      <QtyHolder food={food} />
    </div>
  );
};

Details.propTypes = {
  food: PropTypes.object
};
export default Details;
