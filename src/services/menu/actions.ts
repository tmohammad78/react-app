import axios from 'axios';
import { IRestDataGet, IUpdateMenuAction, IDisLikeProductAction, ILikeProductAction, menuActionTypes } from './actionTypes';
import { restaurantMenu } from '../util';
import { objectToArray } from '../../helper/index';
import parseMenu from './util/menu';
import { IDataMain } from './actionTypes';
import { arrayToObject } from 'helper/index';
import { Dispatch, ActionCreator } from 'redux';
const Data = {
	foodList: null
};

export const updateProduct: ActionCreator<IUpdateMenuAction> = product => ({
	type: menuActionTypes.UPDATE_PRODUCT,
	payload: product
});

export const likeProduct: ActionCreator<ILikeProductAction> = product => ({
	type: menuActionTypes.LIKED_PRODUCT,
	payload: product
});

export const dislikeProduct: ActionCreator<IDisLikeProductAction> = product => ({
	type: menuActionTypes.DISLIKED_PRODUCT,
	payload: product
});



export const fetchMenu = (callback: () => void) => (dispatch: Dispatch, getState: any) => {
	const cart = getState().cart.items;
	const likedFood = getState().likeFood.likeFood;
	const foodList = getState().menu.foodList;

	const productLoaded = (data: IDataMain, sort: string | null) => {
		const menu = parseMenu(data, sort);
		const foodList = menu.foodList;
		const foodListItem = arrayToObject(menu.foodList);
		const categoryList = menu.categoryList;

		Object.keys(cart).forEach(key => {
			const cartItem = cart[key];
			const food = foodListItem[`${cartItem.id}`];
			if (food) food.quantity = cartItem.quantity;
		});

		Object.keys(likedFood).forEach(key => {
			const likedItem = likedFood[key];
			const food = foodListItem[`${likedItem.id}`];
			food ? (food.like = true) : null;
		});

		if (callback) {
			callback();
		}

		objectToArray(cart).forEach(c => {
			const product = foodList.find(x => x.id === c.id);
			if (product) {
				product.quantity = c.quantity;
			}
		});

		return dispatch({
			type: menuActionTypes.FETCH_MENU,
			payload: {
				foodListItem,
				foodList,
				categoryList
			}
		});
	};
	if (!foodList) {
		axios
			.get<IRestDataGet[]>(restaurantMenu, transformResponse: (r: ServerResponse) => r.data)
			.then(response => {
				const { data }: IDataMain[] = response;
				Data.foodList = data.response;
				return productLoaded(data);
			})
			.catch(err => {
				console.log(err, 'Could not fetch foodList. Try again later.');
			});
	}
	return;
};