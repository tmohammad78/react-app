import { LOAD_CART, ADD_FOOD, REMOVE_FOOD } from "./actionTypes";

export const loadCart = products => ({
	type: LOAD_CART,
	payload: products
});

export const addFood = (product,quantity=1) => ({
	type: ADD_FOOD,
	payload: {product , quantity }
});

// export function addFood(product,quantity=1){
// 	return {
// 		type:ADD_FOOD,
// 		payload:{product , quantity}
// 	}
// }

export const removeFood = (product,fullRemove=false) => ({
	type: REMOVE_FOOD,
	payload: {product,fullRemove }
});
