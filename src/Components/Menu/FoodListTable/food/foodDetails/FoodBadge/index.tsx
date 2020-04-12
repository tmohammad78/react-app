import React, { useEffect } from 'react';

import { currency } from 'Helper/index';

interface IProps {
	quantity: number
}

const FoodBadge: React.SFC<IProps> = ({ quantity }) => {
	return (
		<div className='quantity-badge transition-all'>
			<span>{quantity > 0 ? currency(quantity, false) : null}</span>
		</div>
	);
};

export default FoodBadge;
