import { FETCH_MENU,UPDATE_PRODUCT } from "./actionTypes";

const initialState = {
	categoryList: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_MENU:
			return {
				...state,
				categoryList: action.payload
			};
		case UPDATE_PRODUCT:
			return {
				...state,
				productToUpdate:action.payload	
			}
		default:
			return state;
	}
}
