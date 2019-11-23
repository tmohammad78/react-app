import {
  LOAD_CART,
  ADD_FOOD,
  ADD_FOOD_CART,
  REMOVE_FOOD,
  REMOVE_FOOD_CART,
  UPDATE_CART
} from './actionTypes';
import { updateProduct } from '../menu/actions';
import { objectToArray } from '../../helper/index';
export const loadCart = (products) => ({
  type: LOAD_CART,
  payload: products
});

export const addFood = (product, quantity = 1) => (dispatch, getState) => {
  const cartProducts = getState().cart.items;
//   const foodProduct = getState().menu.foodList;
  let productInCart = false;
  let totalQuantity = quantity;
  objectToArray(cartProducts).forEach((item) => {
    if (item.id == product.id) {
      item.quantity += quantity;
      totalQuantity = item.quantity;
      productInCart = true;
    }
  });

  //   foodProduct.forEach((item) => {
  //     if (item.id == product.id) {
  //       item.quantity += quantity;
  //     }
  //   });

  if (!productInCart) {
    product.quantity = quantity;
    cartProducts[product.id] = product;
  }
  dispatch(updateProduct({ id: product.id, quantity: totalQuantity }));
  dispatch(updateCart(objectToArray(cartProducts)));
  return dispatch({
    type: ADD_FOOD_CART,
    payload: { product, quantity }
  });
};

export const updateCart = (cartProducts) => (dispatch) => {
  const totalProduct = objectToArray(cartProducts).reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);
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

export const removeFood = (product, fullRemove = false) => (dispatch, getState) => {
  const cartProducts = getState().cart.items;

  product.quantity = fullRemove ? 0 : product.quantity - 1;
  cartProducts[product.id].quantity = product.quantity;

  dispatch(updateProduct({ id: product.id, quantity: product.quantity }));
  dispatch(updateCart(objectToArray(cartProducts)));

  return dispatch({
    type: REMOVE_FOOD_CART,
    payload: { product, fullRemove }
  });
};
