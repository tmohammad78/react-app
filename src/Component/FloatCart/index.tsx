import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'component/Buttons/Button';
import CartProduct from './CartProduct';

import { objectToArray, currency } from 'helper/index';

import { ICartItemsObject } from 'src/types';
import { IApplicationState } from 'src/services/reducers';

import { RestCart, LeftSideHolder } from './style';
import { CartListHolder, CartShowMobile } from './style.js';
import './style.scss';

const FloatCart = () => {
	let offForm;
	const [isForm, setIsForm] = useState(false);
	const [showCart, SetShowCart] = useState(false);
	const cartProducts = useSelector<IApplicationState, ICartItemsObject>(state => state.cart.items);
	const cartInfo = useSelector<IApplicationState,>(state => state.cart.cartTotal);
	const { totalPrice, totalProduct } = cartInfo;
	const products = objectToArray(cartProducts).map((item, i) => {
		return <CartProduct key={i} product={item} />;
	});

	const toggleShowCart = () => {
		SetShowCart(prevState => !prevState);
	};

	if (isForm) {
		offForm = (
			<div>
				<form className='add-coupon'>
					<aside>
						{/* <input
							type='text'
							placeholder='کد تخفیف رو وارد کن'
							value
							maxLength='15 '
							style={{ direction: 'rtl' }}
						/> */}
						<Button>
							<span>ثبت کد</span>
						</Button>
					</aside>
				</form>
			</div>
		);
	}

	return (
		<React.Fragment>
			<LeftSideHolder className={`clearfix ${showCart ? 'show-cart' : 'hide-cart'}`}>
				<RestCart>
					<div className='cross-icon' onClick={toggleShowCart}>
						<div className='fo fo-cross'></div>
					</div>
					{!totalProduct ? (
						<div className='empty-cart'>
							<i className='fo fo-empty-bag' />
							<span>سبد خالی است</span>
						</div>
					) : (
							<React.Fragment>
								<header className='header-cart'>
									<h3>
										سبد خرید<span className='cart-size'>{currency(totalProduct, false)}</span>
									</h3>
								</header>
								<div className='cart-holder-inner clearfix'>
									{/* <div className='cart-list-holder'> */}
									<CartListHolder>
										<div className='cart-list'>
											<div>
												<section className='has-items'>
													<div className='user-cart-list'>
														<div>{products}</div>
													</div>
												</section>
											</div>
										</div>
									</CartListHolder>
									<div className='cart-bottom'>
										<div className='row cart-total'>
											<span>هزینه ی کل</span>
											<span>
												<b className='total-price'>{currency(totalPrice)}</b>
											</span>
										</div>
										<div className='row add-coupon-holder'>
											<Button color='#FFBD41' bgcolor='transparent' onClick={() => setIsForm(false)}>
												کد تخفیف دارید؟
                    </Button>
											{offForm}
										</div>
										<div className='row button-holder'>
											<Button style={{ width: '100%', padding: 10, height: 45 }}>
												<span>نهایی کردن سفارش</span>
											</Button>
										</div>
									</div>
								</div>
							</React.Fragment>
						)}
				</RestCart>
			</LeftSideHolder>

			<CartShowMobile onClick={toggleShowCart}>
				<div className='content'>
					<span>سبد خرید </span>
					<span className='totalProduct'>{totalProduct > 0 ? totalProduct : null}</span>
				</div>
			</CartShowMobile>
		</React.Fragment>
	);
};

export default FloatCart;
