import React from 'react';
import PropTypes from 'prop-types';
import { currency } from 'src/helper/index';
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

Price.propTypes = {
	price: PropTypes.string
};

export default Price;
