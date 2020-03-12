import { likeFoodActionTypes } from './actionType';
import { likeProduct, dislikeProduct } from '../menu/actions';
import { IFoodList } from 'src/types';
import { Dispatch } from 'redux';

export const addFoodLike = (food: IFoodList) => (dispatch: Dispatch) => {
	dispatch(likeProduct({ id: food.id }));
	return dispatch({
		type: likeFoodActionTypes.ADD_TO_LIKE,
		food
	});
};

export const removeFoodLike = (food: IFoodList) => (dispatch: Dispatch, getState: any) => {
	const likeFood = getState().likeFood.likeFood;
	delete likeFood[food.id];
	dispatch(dislikeProduct({ id: food.id }));
	return dispatch({
		type: likeFoodActionTypes.DELETE_TO_LIKE,
		likeFood
	});
};
