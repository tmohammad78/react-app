import axios from 'axios';
import { FETCH_MENU, UPDATE_PRODUCT } from './actionTypes';
import { restaurantMenu } from '../util';
import parseMenu from './util/menu';

const Data = {
  foodList: null
};

export const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  payload: product
});

export const fetchMenu = (sortBy, callback) => (dispatch, getState) => {
  const cart = getState().cart.products;
  const productLoaded = (data, sort) => {
    const menu = parseMenu(data, sort);
    const foodList = menu.foodList;
    const categoryList = menu.categoryList;
    if (callback) {
      callback();
    }
    cart.forEach(c => {
      const product = foodList.find(x => x.id === c.id);
      if (product) {
        product.quantity = c.quantity;
      }
    });

    return dispatch({
      type: FETCH_MENU,
      payload: {
        foodList,
        categoryList
      }
    });
  };
  // if (Data.foodList !== null) {
  // 	return productLoaded([...Data.foodList]);
  // }
  return axios
    .get(restaurantMenu)
    .then(response => {
      const { data } = response;
      Data.foodList = data;
      return productLoaded(data, sortBy);
    })
    .catch(err => {
      console.log(err, 'Could not fetch foodList. Try again later.');
    });
};
