import { menuActionTypes, MenuState, MenuSystemAction } from './actionTypes';
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
					[action.payload.id]: {
						...state.foodListItem[action.payload.id],
						like: true
					}
				}
			};

		case menuActionTypes.DISLIKED_PRODUCT:
			return {
				...state,
				foodListItem: {
					...state.foodListItem,
					[action.payload.id]: {
						...state.foodListItem[action.payload.id],
						like: false
					}
				}
			};
		default:
			return state;
	}
}
