import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CartProduct from './CartProduct';
import { Button } from 'component/Buttons/Button';
import { objectToArray } from 'helper';

import './style.scss';

const FloatCart = () => {
  let offForm;
  const [isForm, setIsForm] = useState(false);
  const [showCart, SetShowCart] = useState(false);
  const cartProducts = useSelector((state) => state.cart.items);
  const cartInfo = useSelector((state) => state.cart.cartTotal);
  const { totalPrice, totalProduct } = cartInfo;

  const products = objectToArray(cartProducts).map((item) => {
    return <CartProduct product={item} />;
  });

  const toggleShowCart = () => {
    SetShowCart((prevState) => !prevState);
  };

  if (isForm) {
    offForm = (
      <div>
        <form className='add-coupon'>
          <aside>
            <input
              type='text'
              placeholder='کد تخفیف رو وارد کن'
              value
              maxLength='15 '
              style={{ direction: 'rtl' }}
            />
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
      <div className={`left-side-holder clearfix ${showCart ? 'show-cart' : 'hide-cart'} `}>
        <div className='rest-cart'>
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
                  سبد خرید<span className='cart-size'>{totalProduct}</span>
                </h3>
              </header>
              <div className='cart-holder-inner clearfix'>
                <div className='cart-list-holder'>
                  <div className='cart-list'>
                    <div>
                      <section className='has-items'>
                        <div className='user-cart-list'>
                          <div>{products}</div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div className='cart-bottom'>
                  {/* <div className="row cart-discount" />
										<div className="row coupon-row" />
										<div className="row cart-delivery" />
										<div className="row cart-tax" /> */}
                  <div className='row cart-total'>
                    <span>هزینه ی کل</span>
                    <span>
                      <b className='total-price'>{totalPrice}</b>
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
        </div>
        <Button>
          <h3>
            <i className='fo fo-cart' />
            <span>سبد خرید</span>
          </h3>
          <div className='total-price'>{totalPrice}</div>
        </Button>
      </div>
      <div className='cartshowMobile' onClick={toggleShowCart}>
        <div className='content'>
          <span>سبد خرید </span>
          <span className='totalProduct'>{totalProduct > 0 ? totalProduct : null}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FloatCart;
