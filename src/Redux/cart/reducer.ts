import { CartSystemAction, cartActionTypes } from './actionTypes';
import { CartState } from '@Types/index';
import { Reducer } from 'redux';

const initialState: CartState = {
	products: [],
	items: {},
	foodToAdd: {},
	cartTotal: {}
};

export const cartReducer: Reducer<CartState, CartSystemAction> = (state = initialState, action) => {
	switch (action.type) {
		case cartActionTypes.LOAD_CART:
			return {
				...state,
				products: action.products
			};
		case cartActionTypes.UPDATE_CART:
			return {
				...state,
				cartTotal: { ...action.payload }
			};
		case cartActionTypes.ADD_FOOD_CART:
			return {
				...state,
				foodToAdd: { ...action.payload }
			};
		case cartActionTypes.REMOVE_FOOD_CART:
			return {
				...state,
				foodToRemove: { ...action.payload }
			};
		default:
			return state;
	}
}
