import React, { FunctionComponent } from 'react';
import { currency } from '../../../../../../helper/index';

interface IProps {
	quantity: number
}

const FoodBadge: FunctionComponent<IProps> = ({ quantity }) => {
	return (
		<div className='quantity-badge transition-all'>
			<span>{quantity > 0 ? currency(quantity, false) : null}</span>
		</div>
	);
};

export default FoodBadge;
