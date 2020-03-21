import { IFoodList , INewFoodList } from "src/types";

export enum likeFoodActionTypes {
	ADD_TO_LIKE = 'ADD_TO_LIKE',
	DELETE_TO_LIKE = 'DELETE_TO_LIKE'
}

export interface IAddFoodLikeAction {
	type: likeFoodActionTypes.ADD_TO_LIKE,
	food: INewFoodList
}

export interface IRemoveFoodLikeAction {
	type: likeFoodActionTypes.DELETE_TO_LIKE,
	likeFood: INewFoodList
}

export type LikeFoodSystemAction = IAddFoodLikeAction | IRemoveFoodLikeAction;