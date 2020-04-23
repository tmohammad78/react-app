import { subFoodActionTypes, SubFoodSystemAction } from './actionType';
import { Reducer } from 'redux';
import { SubFoodState } from '../../../Types/index';
const initialState: SubFoodState = {
	food: [],
	show: false,
};

export const subFoodReducer: Reducer<SubFoodState, SubFoodSystemAction> = (state = initialState, action) => {
	switch (action.type) {
		case subFoodActionTypes.SET_SUBFOOD: {
			const { food, show } = action.payload;
			return {
				...state,
				...state.food,
				show,
				food
			};
		}
		case subFoodActionTypes.CLOSE_MODAL: {
			return {
				...state,
				show: action.show
			};
		}
		default:
			return state;
	}
};
