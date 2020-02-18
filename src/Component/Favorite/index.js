import React from 'react';
import { useSelector } from 'react-redux';
import Food from '../Menu/FoodListTable/food';
import { objectToArray } from 'helper/';

const Favorite = () => {
  let favoriteFood = useSelector(state => state.likeFood.likeFood);
  favoriteFood = objectToArray(favoriteFood);
  return (
    <div
      className=''
      style={{
        direction: 'rtl'
      }}
    >
      <div>
        <span>علاقه مندی ها</span>
      </div>
      {favoriteFood.map(item => {
		  console.log(item)
        return <Food food={item} key={item.id} />;
      })}
    </div>
  );
};
export default Favorite;
