import { likeFoodActionTypes, IAddFoodLikeAction } from './actionType';
import { likeProduct, dislikeProduct } from '../menu/actions';
import { IFoodList } from 'src/types';
import { Dispatch, ActionCreator } from 'redux';

export const addFoodLike: ActionCreator<IAddFoodLikeAction> = (food) => (dispatch: Dispatch) => {
	dispatch(likeProduct({ id: food.id }));
	return dispatch({
		type: likeFoodActionTypes.ADD_TO_LIKE,
		food: food
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
