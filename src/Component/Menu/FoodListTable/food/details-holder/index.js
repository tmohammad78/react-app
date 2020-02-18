import React, { useMemo , useEffect } from 'react';
import PropTypes from 'prop-types';

import Ingredient from '../foodDetails/ingredient';
import Price from '../foodDetails/price';
import QtyHolder from '../foodDetails/qty-holder';
import Tittle from '../foodDetails/Tittle';
import LikeFood from '../foodDetails/likeFood';

import './style.scss';

const Details = ({ food }) => {
	
  const Detail = () => {
    return (
      <React.Fragment>
        <Tittle tittle={food.title} />
        <Ingredient ingredient={food.ingredient} />
        <Price price={food.price} />
        <LikeFood food={food} />
      </React.Fragment>
    );
  };

  const renderMemoDetail = useMemo(() => {
    return <Detail />;
  });

  return (
    <div className='details-holder clearfix'>
      {/* {renderMemoDetail} */}
      <Detail />
      <QtyHolder food={food} />
    </div>
  );
};

Details.propTypes = {
  food: PropTypes.object
};
export default Details;
