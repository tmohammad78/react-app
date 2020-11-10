import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import Food from '../Menu/FoodListTable/food/index';
import { objectToArray } from '../../helper/index';
import { IApplicationState } from '../../Redux/reducers';
import { LikeFoodState, INewFoodList, TestLikeState } from '../../types/index';

const Favorite: FunctionComponent = () => {
	const favoriteFood = useSelector<IApplicationState, LikeFoodState>(state => state.likeFood);
	const ToArray = (objectList: TestLikeState) => {
		const list: INewFoodList[] = [];
		Object.values(objectList).forEach((item: INewFoodList) => {
			list[parseInt(item.index, 10)] = item;
		});

		return list;
	};
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
			{ToArray(favoriteFood.likeFood).map((item: INewFoodList) => {
				return <Food food={item} key={item.id} />;
			})}
		</div>
	);
};
export default Favorite;
