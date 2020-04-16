import React from 'react';
import { useDispatch } from 'react-redux';

import { addFoodLike, removeFoodLike } from '../../../../../../Redux/likeFood/action';
import { INewFoodList } from '../../../../../../Types/index';


import Svg from './heart.svg';
import Svg1 from './heart2.svg';

import { LikeFoodStyle } from './style';

interface IProps {
	food: INewFoodList
}

const LikeFood = ({ food }: IProps) => {
	const dispatch = useDispatch();
	const checkDispatch = () => {
		if (food.like) {
			dispatch(removeFoodLike(food));
		} else {
			dispatch(addFoodLike(food));
		}
	};

	const handleLikeFood = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		e.stopPropagation();
		checkDispatch();
	};

	return (
		<div className={`${food.like ? 'show' : 'hide'}`}>
			<LikeFoodStyle className={`${food.like ? 'show' : 'hide'}`} onClick={handleLikeFood}>
				{food.like ? <Svg1 /> : <Svg />}
				<div className='icon-heart'></div>
			</LikeFoodStyle>
		</div>
	);
};
export default LikeFood;
//LikeFoodStyle