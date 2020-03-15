import { likeFoodActionTypes, LikeFoodSystem } from './actionType';
import { Reducer } from 'redux';
import { LikeFoodState } from '../../types/index';
const initialState: LikeFoodState = {
	likeFood: {}
};

export const likeFoodReducer: Reducer<LikeFoodState, LikeFoodSystem> = (state = initialState, action) => {
	switch (action.type) {
		case likeFoodActionTypes.ADD_TO_LIKE: {
			const { food } = action;
			return {
				...state,
				likeFood: {
					...state.likeFood,
					[food.id]: food
				}
			};
		}
		case likeFoodActionTypes.DELETE_TO_LIKE: {
			// because we are change directly in redux we should copy of that
			// to undretand the different and setstate again
			const { likeFood } = action;
			return {
				...state,
				likeFood
			};
		}
		default:
			return state;
	}
}
