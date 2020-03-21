import { menuActionTypes, MenuSystemAction } from './actionTypes';
import { MenuState } from '../../types/index';
import { Reducer } from 'redux';

const initialState: MenuState = {
	foodListItem: {},
	foodList: null,
	categoryList: []
};

export const menuReducer: Reducer<MenuState, MenuSystemAction> = (state = initialState, action) => {
	switch (action.type) {
		case menuActionTypes.FETCH_MENU: {
			const { foodList, categoryList, foodListItem } = action.payload;
			return {
				...state,
				foodListItem,
				foodList,
				categoryList
			};
		}
		case menuActionTypes.UPDATE_PRODUCT:
			return {
				...state,
				foodListItem: {
					...state.foodListItem,
					[action.payload.id]: {
						...state.foodListItem[action.payload.id],
						quantity: action.payload.quantity
					}
				}
			};
		case menuActionTypes.LIKED_PRODUCT:
			return {
				...state,
				foodListItem: {
					...state.foodListItem,
					[action.product.id]: {
						...state.foodListItem[action.product.id.toString()],
						like: true
					}
				}
			};

		case menuActionTypes.DISLIKED_PRODUCT:
			return {
				...state,
				foodListItem: {
					...state.foodListItem,
					[action.product.id]: {
						...state.foodListItem[action.product.id],
						like: false
					}
				}
			};
		default:
			return state;
	}
}
