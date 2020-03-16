import React from 'react';
import { useSelector } from 'react-redux';
import Food from '../Menu/FoodListTable/food';
import { objectToArray } from 'helper/index';
import { IApplicationState } from 'services/reducers';
import { LikeFoodState, IFoodList } from 'src/types/index';

const Favorite = () => {
	let favoriteFood = useSelector<IApplicationState, LikeFoodState[]>(state => state.likeFood.likeFood);
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
			{favoriteFood.map((item: IFoodList) => {
				return <Food food={item} key={item.id} />;
			})}
		</div>
	);
};
export default Favorite;
