import React from 'react';

import { currency } from 'helper';
import './style.scss';

interface Props {
	price: number | undefined
}
const Price = ({ price }: Props) => {
	return (
		<span className='price'>
			<small>{price ? currency(price) : ''}</small>
		</span>
	);
};

export default Price;
