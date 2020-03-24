import React from 'react';
import Svg from './heart.svg';
import Svg1 from './heart2.svg';

import { useDispatch } from 'react-redux';
import { addFoodLike, removeFoodLike } from 'services/likeFood/action';
import { LikeFoodStyle } from './style.js';
import { INewFoodList } from 'types';

interface IProps {
	food: INewFoodList
}

const LikeFood = ({ food }: IProps) => {
	const dispatch = useDispatch();

	const checkDispatch = () => {
		if (food) {
			dispatch(removeFoodLike(food));
		} else {
			dispatch(addFoodLike(food));
		}
	};

	const handleLikeFood = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		e.stopPropagation();
		checkDispatch();
	};

	return (
		<div className={`${food.like ? 'show' : 'hide'}`}>
			<div onClick={handleLikeFood}>
				{food.like ? <Svg1 /> : <Svg />}
				<div className='icon-heart'></div>
			</div>
		</div>
	);
};
export default LikeFood;
//LikeFoodStyle