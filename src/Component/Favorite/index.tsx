import React from 'react';
import { useSelector } from 'react-redux';
import Food from '../Menu/FoodListTable/food';
import { objectToArray } from 'helper/index';
import { IApplicationState } from 'services/reducers';
import { LikeFoodState, IFoodList, INewFoodList, TestLikeState } from 'src/types/index';

const Favorite: React.SFC = () => {
	// let favoriteFood = useSelector<IApplicationState, LikeFoodState>(state => state.likeFood);
	const ToArray = (objectList: TestLikeState) => {
		const list: INewFoodList[] = [];
		Object.values(objectList).forEach((item: INewFoodList) => {
			list[parseInt(item.index)] = item;
		});

		return list;
	};

	// favoriteFood.likeFood = objectToArray(favoriteFood.likeFood);
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
			{/* {favoriteFood.map((item: INewFoodList) => {
				return <Food food={item} key={item.id} />;
			})} */}
			<div>
				dkf
			</div>
		</div>
	);
};
export default Favorite;
