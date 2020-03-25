import React from 'react';
import PropTypes from 'prop-types';

const FoodListTitle = ({ category, id }) => {
  return (
    <h2 id={id}>
      <span>{category}</span>
    </h2>
  );
};

FoodListTitle.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number
};

export default FoodListTitle;
