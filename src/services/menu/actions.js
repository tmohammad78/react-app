import axios from 'axios';
import { FETCH_MENU, UPDATE_PRODUCT } from './actionTypes';
import { restaurantMenu } from '../util';
import { objectToArray } from '../../helper/index';
import parseMenu from './util/menu';
import { arrayToObject } from 'helper/index';
const Data = {
  foodList: null
};

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product
});

export const fetchMenu = (callback) => (dispatch, getState) => {
  const cart = getState().cart.items;
  const productLoaded = (data, sort) => {
    const menu = parseMenu(data, sort);
    const foodList = menu.foodList;
    const foodListItem = arrayToObject(menu.foodList);
    const categoryList = menu.categoryList;
    Object.keys(cart).forEach((key) => {
      console.log(key);
      const cartItem = cart[key];
      console.log(cartItem);
      const food = foodListItem[`${cartItem.id}`];
      console.log(food);
      if (food) food.quantity = cartItem.quantity;
    });
    if (callback) {
      callback();
    }
    objectToArray(cart).forEach((c) => {
      const product = foodList.find((x) => x.id === c.id);
      if (product) {
        product.quantity = c.quantity;
      }
    });

    return dispatch({
      type: FETCH_MENU,
      payload: {
        foodListItem,
        foodList,
        categoryList
      }
    });
  };
  return axios
    .get(restaurantMenu)
    .then((response) => {
      const { data } = response;
      Data.foodList = data;
      return productLoaded(data);
    })
    .catch((err) => {
      console.log(err, 'Could not fetch foodList. Try again later.');
    });
};
