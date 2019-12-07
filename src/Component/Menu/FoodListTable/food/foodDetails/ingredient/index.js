import React from 'react';
import PropTypes from 'prop-types';
import { truncate } from 'helper';
import './style.scss';

const Ingredient = ({ ingredient, checkTruncate = true }) => {
  return ingredient ? (
    <div className='ingredient'>{checkTruncate ? truncate(ingredient, 8) : ingredient}</div>
  ) : null;
};

Ingredient.propTypes = {
  ingredient: PropTypes.string,
  checkTruncate: PropTypes.bool
};

export default Ingredient;
