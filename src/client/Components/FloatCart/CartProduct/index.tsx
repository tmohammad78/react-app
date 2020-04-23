import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../Buttons/Button';
import QtyHolder from '../../Menu/FoodListTable/food/foodDetails/qty-holder/index';
import Tittle from '../../Menu/FoodListTable/food/foodDetails/Tittle/index';
import Price from '../../Menu/FoodListTable/food/foodDetails/price/index';

import { removeFood } from '../../../Redux/cart/actions';

import { IFoodList } from '../../../../Types/index';

interface IProps {
	product: IFoodList;
}

const CartProduct: React.SFC<IProps> = ({ product }) => {
	const dispatch = useDispatch();
	if (product.quantity > 0) {
		return (
			<div className='item'>
				<div className='item-holder clearfix'>
					<aside className='item-aside'>
						<Button
							ptb='4'
							prl='4'
							className='ancFullRemove'
							color='red'
							bgcolor='transparent'
							onClick={() => dispatch(removeFood(product, true))}
						>
							x
            			</Button>
						<div className='cartInfoFood'>
							<Tittle tittle={product.title} />
							<Price price={product.price} />
						</div>
					</aside>
					<QtyHolder food={product} />
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default CartProduct;
