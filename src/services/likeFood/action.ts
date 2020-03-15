import { IRemoveFoodLikeAction, likeFoodActionTypes, IAddFoodLikeAction } from './actionType';
import { likeProduct, dislikeProduct } from '../menu/actions';
import { IFoodList } from 'src/types';
import { Dispatch, ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IApplicationState } from 'services/reducers';

export const addFoodLike: ActionCreator<ThunkAction<AnyAction, IApplicationState, undefined, IAddFoodLikeAction>> = (food: IFoodList) => (dispatch: Dispatch) => {
	dispatch(likeProduct({ id: food.id }));
	return dispatch({
		type: likeFoodActionTypes.ADD_TO_LIKE,
		food: food
	});
};

export const removeFoodLike: ActionCreator<ThunkAction<AnyAction, IApplicationState, undefined, IRemoveFoodLikeAction>> = (food: IFoodList) => (dispatch: Dispatch, getState: () => IApplicationState) => {
	const likeFood = getState().likeFood.likeFood;
	delete likeFood[food.id];
	dispatch(dislikeProduct({ id: food.id }));
	return dispatch({
		type: likeFoodActionTypes.DELETE_TO_LIKE,
		likeFood
	});
};
