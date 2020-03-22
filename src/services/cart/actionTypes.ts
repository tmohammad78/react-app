import { IFoodList } from 'types';
export enum cartActionTypes {
	LOAD_CART = 'LOAD_CART',
	ADD_FOOD_CART = 'ADD_FOOD_CART',
	REMOVE_FOOD_CART = 'REMOVE_FOOD_CART',
	UPDATE_CART = 'UPDATE_CART',
}

export interface ILoadCartAction {
	type: cartActionTypes.LOAD_CART,
	products: IFoodList[]
}

export interface IAddFoodCartAction {
	type: cartActionTypes.ADD_FOOD_CART,
	payload: {
		product: IFoodList,
		quantity: number
	}
}
export interface IUpdateCartAction {
	type: cartActionTypes.UPDATE_CART,
	payload: {
		totalPrice: number,
		totalProduct: number
	}
}
export interface IRemoveFoodCartAction {
	type: cartActionTypes.REMOVE_FOOD_CART,
	payload: {
		product: IFoodList[],
		fullRemove: boolean
	}
}

export type CartSystemAction = IUpdateCartAction | ILoadCartAction | IAddFoodCartAction | IRemoveFoodCartAction;