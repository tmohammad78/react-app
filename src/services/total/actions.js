import UPDATE_CART from './actionTypes';

const updateCart = cartProducts => dispatch => {
  const productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  const totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  const cartTotal = {
    productQuantity,
    totalPrice
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};

export default updateCart;
