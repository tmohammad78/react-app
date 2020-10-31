import { FunctionComponent } from 'react';

// @ts-ignore
import { currency } from '../../../../../../Helper/index';

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
