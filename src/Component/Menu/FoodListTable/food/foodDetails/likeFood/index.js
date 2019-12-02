import React from 'react';
import Svg from './heart.svg';
import Svg1 from './heart2.svg';

import { useDispatch } from 'react-redux';
import { addFoodLike, removeFoodLike } from 'services/likeFood/action';
import { LikeFoodStyle } from './style.js';

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
    <LikeFoodStyle className={`${food.like ? 'show' : 'hide'}`}>
      <div onClick={handleLikeFood}>
        {food.like ? <Svg1 /> : <Svg />}
        <div className='icon-heart'></div>
      </div>
    </LikeFoodStyle>
  );
};
export default LikeFood;
