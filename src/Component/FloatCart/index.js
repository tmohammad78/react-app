import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import Button from '../Buttons/Button';
import './style.scss';

const FloatCart = () => {
  let offForm;
  const [isForm, setIsForm] = useState(false);
  
  const cartProducts = useSelector(state => state.cart.products);
  const cartInfo = useSelector(state => state.total.data);

  const { totalPrice, productQuantity } = cartInfo;

  const products = cartProducts.map(item => {
    return <CartProduct product={item} />;
  });
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
      <div className='left-side-holder clearfix'>
        <div className='rest-cart'>
          {!productQuantity ? (
            <div className='empty-cart'>
              <i className='fo fo-empty-bag' />
              <span>سبد خالی است</span>
            </div>
          ) : (
            <React.Fragment>
              <header>
                <h3>سبد خرید</h3>
                <div className='cart-quantity'>
                  <i className='fo fo-cart' />
                  <span className='cart-size round-full'>{productQuantity}</span>
                </div>
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
                    <button
                      type='button'
                      className='anc anc-coupon'
                      onClick={() => setIsForm(false)}
                    >
                      کد تخفیف دارید؟
                    </button>
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
    </React.Fragment>
  );
};
FloatCart.propTypes = {
  updateCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  updateProduct: PropTypes.object,
  foodToAdd: PropTypes.object,
  foodToRemove: PropTypes.object,
  removeFood: PropTypes.func,
  addFood: PropTypes.func,
  cartTotal: PropTypes.object
};

export default FloatCart;
