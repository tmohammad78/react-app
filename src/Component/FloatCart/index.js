import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFood, removeFood } from '../../services/cart/actions';
import updateCart from '../../services/total/actions';
import { updateProduct } from '../../services/menu/actions';
import CartProduct from './CartProduct';
import Button from '../Buttons/Button';
import './style.scss';

class FloatCart extends Component {
  state = {
    isForm: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.foodToAdd !== this.props.foodToAdd) {
      this.addFood(nextProps.foodToAdd);
    }
    if (nextProps.foodToRemove !== this.props.foodToRemove) {
      this.removeFood(nextProps.foodToRemove);
    }
  }

  addFood = ({ product, quantity }) => {
    const {
      cartProducts,
      updateCart: updateCartItem,
      updateProduct: updateProductItem
    } = this.props;
    let productAlreadyInCart = false;
    let totalQuantity = quantity;
    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += quantity;
        totalQuantity = cp.quantity;
        productAlreadyInCart = true;
      }
    });
    if (!productAlreadyInCart) {
      product.quantity = quantity;
      cartProducts.push(product);
    }
    updateProductItem({ id: product.id, quantity: totalQuantity });
    updateCartItem(cartProducts);
  };

  removeFood = ({ product, fullRemove }) => {
    const {
      cartProducts,
      updateCart: updateCartItem,
      updateProduct: updateProductItem
    } = this.props;
    const index = cartProducts.findIndex(p => p.id === product.id);
    product.quantity = fullRemove ? 0 : product.quantity - 1;

    if (fullRemove || !(product.quantity > 0)) {
      if (index >= 0) {
        cartProducts.splice(index, 1);
      }
    } else {
      cartProducts[index].quantity = product.quantity;
    }
    updateCartItem(cartProducts);
    updateProductItem({ id: product.id, quantity: product.quantity });
  };

  renderOffForm = () => {
    this.setState({
      isForm: true
    });
  };

  render() {
    const { totalPrice, productQuantity } = this.props.cartTotal;
    let offForm;
    const {
      cartTotal,
      cartProducts,
      removeFood: removeFoodItem,
      addFood: addFoodItem
    } = this.props;
    const products = cartProducts.map(item => {
      return <CartProduct product={item} removeFood={removeFoodItem} addFood={addFoodItem} />;
    });
    if (this.state.isForm) {
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
              <button type='button' className='anc'>
                <span>ثبت کد</span>
              </button>
            </aside>
          </form>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className='left-side-holder clearfix'>
          <div className='rest-cart'>
            {!cartTotal.productQuantity ? (
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
                        onClick={() => {
                          this.renderOffForm();
                        }}
                      >
                        کد تخفیف دارید؟
                      </button>
                      {offForm}
                    </div>
                    <div className='row button-holder'>
                      <Button style={{ width: '100%', padding: 10, height: 45 }} outline={false}>
                        <span>نهایی کردن سفارش</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
          <button type='button' className='anchor-cart'>
            <h3>
              <i className='fo fo-cart' />
              <span>سبد خرید</span>
            </h3>
            <div className='total-price'>{totalPrice}</div>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
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

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newFood: state.cart.foodToAdd,
  foodToRemove: state.cart.foodToRemove,
  foodToAdd: state.cart.foodToAdd,
  cartTotal: state.total.data
});
export default connect(
  mapStateToProps,
  { updateCart, removeFood, addFood, updateProduct }
)(FloatCart);
