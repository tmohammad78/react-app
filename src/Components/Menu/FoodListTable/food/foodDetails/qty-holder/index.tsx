import React, { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { addFood, removeFood } from '../../../../../../Redux/cart/actions';
import { SubFoodModal } from '../../../../../../Redux/subFood/action';
import { Button } from '../../../../../Buttons/Button';
import { Span } from './span';
import { IFoodList } from '../../../../../../types';

import { QtyStyle, AvailableBox } from './style';
import './style.scss';

interface IProps {
	food: IFoodList
}

const QtyHolder: FunctionComponent<IProps> = ({ food }) => {
	let removeBtn;
	let subfoodIcon;
	const [width, setWidth] = useState('test');
	const dispatch = useDispatch();

	useEffect(() => {
		if (food.quantity > 0) {
			setWidth('show-detail');
		} else {
			setWidth('');
		}
	});

	if (food.subFoods) {
		subfoodIcon = (
			<div>
				<i className='fo fo-arrow-left' />
			</div>
		);
	}

	const handleRemove = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();

		dispatch(removeFood(food));
		// tslint:disable-next-line:no-empty
		if (!(food.quantity > 0)) {
		}
	};

	const addClicked = () => {
		if (food.subFoods.length > 0) {
			dispatch(SubFoodModal(food));
		} else {
			dispatch(addFood(food, 1));
		}
	};

	const handleClick = (e: React.FormEvent<EventTarget>) => {
		setWidth('show-detail');
		e.preventDefault();
		addClicked();
	};

	if (food.quantity > 0) {
		removeBtn = (
			<Button bgcolor='transparent' borderRadius='50' ptb='5' prl='6' onClick={handleRemove}>
				<i className='fo fo-minus' />
			</Button>
		);
	}
	return food.available ? (
		<QtyStyle className={`${width}`}>
			<div className='anc-box'>
				{removeBtn}
				{food.quantity ? <Span qty={food.quantity} /> : null}
				<Button bgcolor='transparent' borderRadius='50' ptb='5' prl='6' onClick={handleClick}>
					<i className='fo fo-plus' />
					<span className='testing' />
				</Button>
			</div>
			{subfoodIcon}
		</QtyStyle>
	) : (
		<AvailableBox>
				<span className='meal-badge'>
					<span>{food.unavailableText}</span>
				</span>
		</AvailableBox>
	);
};

export default QtyHolder;
