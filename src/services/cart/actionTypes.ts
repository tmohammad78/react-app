export interface CartState {
	readonly products: products[]
	readonly items: items{ },
	readonly foodToAdd: { },
	readonly cartTotal: { }
}

export enum ccartActionTypes {
	LOAD_CART = 'LOAD_CART',
	ADD_FOOD = 'ADD_FOOD',
	REMOVE_FOOD = 'REMOVE_FOOD',
	UPDATE_CART = 'UPDATE_CART',
	ADD_FOOD_CART = 'ADD_FOOD_CART',
	REMOVE_FOOD_CART = 'REMOVE_FOOD_CART',
}