
export enum cartActionTypes {
	LOAD_CART = 'LOAD_CART',
	ADD_FOOD_CART = 'ADD_FOOD_CART',
	REMOVE_FOOD_CART = 'REMOVE_FOOD_CART',
	UPDATE_CART = 'UPDATE_CART',
}


export interface ILoadCartAction {
	type: cartActionTypes.LOAD_CART,
	payload: AuthState
}

export interface IAddFoodCartAction {
	type: cartActionTypes.ADD_FOOD_CART,
	payload: AuthState
}
// interface checkVerfify {
// 	type: typeof CHECK_LOGIN,
// 	payload: AuthState
// }

export interface IAuthloginAction {
	type: cartActionTypes.REMOVE_FOOD_CART,
	payload: AuthState
}
export interface IAuthRegisterAction {
	type: cartActionTypes.UPDATE_CART,
	payload: InfoRegister
}
export type CartSystemAction =  IAuthRegisterAction | ILoadCartAction | IAddFoodCartAction | IAuthloginAction ;