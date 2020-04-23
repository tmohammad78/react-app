import { IFoodList , INewFoodList } from "../../../Types/index";

export enum likeFoodActionTypes {
	ADD_TO_LIKE = 'ADD_TO_LIKE',
	DELETE_TO_LIKE = 'DELETE_TO_LIKE'
}

export interface IAddFoodLikeAction {
	type: likeFoodActionTypes.ADD_TO_LIKE,
	food: any
}

export interface IRemoveFoodLikeAction {
	type: likeFoodActionTypes.DELETE_TO_LIKE,
	likeFood: any
}

export type LikeFoodSystemAction = IAddFoodLikeAction | IRemoveFoodLikeAction;