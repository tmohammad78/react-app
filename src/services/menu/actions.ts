import axios from 'axios';
import { IRestDataGet, IUpdateMenuAction, IDisLikeProductAction, ILikeProductAction, menuActionTypes, IFetchMenuAction } from './actionTypes';
import { restaurantMenu } from '../util';
import { objectToArray } from '../../helper/index';
import parseMenu from './util/menu';
import { IDataMain } from './actionTypes';
import { IApplicationState } from '../reducers';
import { IFoodList } from '../../types/index';
import { arrayToObject } from 'helper/index';
import { ThunkAction } from 'redux-thunk';
import { Dispatch, ActionCreator, AnyAction } from 'redux';
interface ttt {
	foodList: IFoodList[] | null | object
}
const Data: ttt = {
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



export const fetchMenu: ActionCreator<ThunkAction<Promise<AnyAction | null>, IApplicationState, undefined, IFetchMenuAction>> = (callback: () => void) => (dispatch: Dispatch, getState: () => IApplicationState) => {
	const cart = getState().cart.items;
	const likedFood = getState().likeFood.likeFood;
	const foodList = getState().menu.foodList;

	const productLoaded = (data: IDataMain, sort?: string | null) => {
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

	return !foodList ?
		axios.
			get<IRestDataGet[]>(restaurantMenu)
			.then(response => {
				const { data } = response;
				Data.foodList = data;
				return productLoaded(data);
			})
			.catch(err => {
				console.log(err, 'Could not fetch foodList. Try again later.');
			})
		: null
};
