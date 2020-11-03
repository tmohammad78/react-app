import React from 'react';
import { useDispatch } from 'react-redux';

import { addFoodLike, removeFoodLike } from '../../../../../../Redux/likeFood/action';
import { INewFoodList } from '../../../../../../types/index';


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

	// @ts-ignore
	return (
		<div className={`${food.like ? 'show' : 'hide'}`}>
			<LikeFoodStyle className="show" onClick={handleLikeFood}>
				{food.like ? <Svg1 /> : <Svg />}
				<div className='icon-heart'></div>
			</LikeFoodStyle>
		</div>
	);
};
export default LikeFood;
// className={`${food.like ? 'show' : 'hide'}`}
