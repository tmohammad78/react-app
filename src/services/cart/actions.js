import { LOAD_CART, ADD_FOOD, ADD_FOOD_CART, REMOVE_FOOD, UPDATE_CART } from './actionTypes';
import { updateProduct } from '../menu/actions';
import { objectToArray } from '../../helper/index';
export const loadCart = (products) => ({
  type: LOAD_CART,
  payload: products
});

export const addFood = (product, quantity = 1) => (dispatch, getState) => {
  const cartProducts = getState().cart.items;
  console.log(cartProducts);
  let productInCart = false;
  let totalQuantity = quantity;
  console.log(objectToArray(cartProducts));
  objectToArray(cartProducts).forEach((item) => {
    debugger;
    console.log('item', item, item.id);
    if (item.id == product.id) {
      item.quantity += quantity;
      totalQuantity = item.quantity;
      console.log('in', item);
      productInCart = true;
    }
  });
  if (!productInCart) {
    debugger;
    product.quantity = quantity;
    cartProducts[product.id] = product;
  }
  dispatch(updateProduct(product));
  dispatch(updateCart(objectToArray(cartProducts)));
  return dispatch({
    type: ADD_FOOD_CART,
    payload: { product, quantity }
  });
};
//   type: ADD_FOOD,
//   payload: { product, quantity }
// });

export const updateCart = (cartProducts) => (dispatch) => {
  console.log(cartProducts);
  const totalProduct = objectToArray(cartProducts).reduce((sum, p) => {
    console.log(objectToArray(cartProducts));
    sum += p.quantity;
    return sum;
  }, 0);

  console.log(totalPrice);
  const totalPrice = objectToArray(cartProducts).reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  const cartTotal = {
    totalPrice,
    totalProduct
  };
  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
export const removeFood = (product, fullRemove = false) => (dispatch) => {
  return dispatch({
    type: REMOVE_FOOD,
    payload: { product, fullRemove }
  });
};
