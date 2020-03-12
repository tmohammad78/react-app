import { ICategoryResponse, AuthState } from '../../types/index';

export enum menuActionTypes {
	FETCH_MENU = "FETCH_MENU",
	UPDATE_PRODUCT = "UPDATE_PRODUCT",
	CATEGORY_LIST = "CATEGORY_LIST",
	LIKED_PRODUCT = "LIKED_PRODUCT",
	DISLIKED_PRODUCT = "DISLIKED_PRODUCT",
}


export interface IDataMain {
	categories: ICategoryResponse[];
}


export interface IRestDataGet {
	category: []
}
export interface IPropsForCallBack {
	callback: () => void
}
export interface IFetchMenuAction {
	type: menuActionTypes.FETCH_MENU,
	payload: AuthState
}

export interface IUpdateMenuAction {
	type: menuActionTypes.UPDATE_PRODUCT,
	payload: AuthState
}

export interface ICategoryAction {
	type: menuActionTypes.CATEGORY_LIST,
	payload: AuthState
}
export interface ILikeProductAction {
	type: menuActionTypes.LIKED_PRODUCT,
	payload: InfoRegister
}
export interface IDisLikeProductAction {
	type: menuActionTypes.DISLIKED_PRODUCT,
	payload: InfoRegister
}

export type MenuSystemAction = IDisLikeProductAction | ILikeProductAction | IFetchMenuAction | IUpdateMenuAction | ICategoryAction