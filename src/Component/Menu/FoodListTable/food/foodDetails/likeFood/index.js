import React from 'react';
import Svg from './heart.svg';
import Svg1 from './heart2.svg';

import { useDispatch } from 'react-redux';
import { addFoodLike, removeFoodLike } from 'services/likeFood/action';
import './style.scss';

const LikeFood = ({ food }) => {
  const dispatch = useDispatch();

  const checkDispatch = () => {
    if (food.like) {
      dispatch(removeFoodLike(food));
    } else {
      dispatch(addFoodLike(food));
    }
  };

  const handleLikeFood = e => {
    e.preventDefault();
    e.stopPropagation();
    checkDispatch();
  };

  return (
    <div className={`like-food ${food.like ? 'show' : 'hide'}`} onClick={handleLikeFood}>
      {food.like ? <Svg1 /> : <Svg />}
      <div className='icon-heart'></div>
    </div>
  );
};
export default LikeFood;
