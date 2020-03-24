import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'component/Buttons/Button';
import QtyHolder from 'component/Menu/FoodListTable/food/foodDetails/qty-holder';
import Tittle from 'component/Menu/FoodListTable/food/foodDetails/Tittle';
import Price from 'component/Menu/FoodListTable/food/foodDetails/price';

import { removeFood } from 'services/cart/actions';

import { IFoodList } from 'types';

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
