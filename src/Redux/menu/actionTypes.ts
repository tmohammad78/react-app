import { ICategoryResponse, MenuState, IFoodList, INewFoodList } from 'Types/index';

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
// export interface IPropsForCallBack {
// 	callback: () => void
// }
export interface IFetchMenuAction {
	type: menuActionTypes.FETCH_MENU,
	payload: MenuState
}

export interface IUpdateMenuAction {
	type: menuActionTypes.UPDATE_PRODUCT,
	payload: IFoodList
}

export interface ICategoryAction {
	type: menuActionTypes.CATEGORY_LIST,
	payload: MenuState
}
export interface ILikeProductAction {
	type: menuActionTypes.LIKED_PRODUCT,
	product: INewFoodList
}
export interface IDisLikeProductAction {
	type: menuActionTypes.DISLIKED_PRODUCT,
	product: INewFoodList
}

export type MenuSystemAction = IDisLikeProductAction | ILikeProductAction | IFetchMenuAction | IUpdateMenuAction | ICategoryAction