import React from 'react';
import Svg from './heart.svg';
import './style.scss';

const LikeFood = ({ handleLikeFood }) => {
  // const handleLikeFood = () =>{

  // }
  return (
    <div className='like-food' onClick={handleLikeFood}>
      <Svg />
      <div className='icon-heart'></div>
    </div>
  );
};
export default LikeFood;
