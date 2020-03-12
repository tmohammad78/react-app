import { ILoadCartAction, IAddFoodCartAction, cartActionTypes, UPDATE_CART } from './actionTypes';
import { updateProduct } from '../menu/actions';
import { objectToArray } from '../../helper/index';
import { IFoodList } from 'src/types';
import { Dispatch, ActionCreator } from 'redux';
export const loadCart: ActionCreator<ILoadCartAction> = (products: IFoodList) => ({
	type: cartActionTypes.LOAD_CART,
	payload: products
});

export const addFood = (product: IFoodList, quantity = 1) => (dispatch: Dispatch, getState: any) => {
	const cartProducts = getState().cart.items;
	let productInCart = false;
	let totalQuantity = quantity;
	objectToArray(cartProducts).forEach(item => {
		if (item.id == product.id) {
			item.quantity += quantity;
			totalQuantity = item.quantity;
			productInCart = true;
		}
	});

	if (!productInCart) {
		product.quantity = quantity;
		// debugger;
		cartProducts[product.id] = product;
	}
	dispatch(updateProduct({ id: product.id, quantity: totalQuantity }));
	dispatch(updateCart(objectToArray(cartProducts)));
	return dispatch({
		type: cartActionTypes.ADD_FOOD_CART,
		payload: { product, quantity }
	});
};

export const updateCart = (cartProducts: IFoodList) => (dispatch: Dispatch) => {
	// const totalProduct = objectToArray(cartProducts).reduce((sum, p) => {
	const totalProduct = objectToArray(cartProducts).reduce((sum, p) => {
		sum += p.quantity;
		return sum;
	}, 0);
	const totalPrice = objectToArray(cartProducts).reduce((sum, p) => {
		sum += p.price * p.quantity;
		return sum;
	}, 0);

	const cartTotal = {
		totalPrice,
		totalProduct
	};
	dispatch({
		type: cartActionTypes.UPDATE_CART,
		payload: cartTotal
	});
};

export const removeFood = (product: IFoodList, fullRemove = false) => (dispatch: Dispatch, getState: any) => {
	const cartProducts = getState().cart.items;

	product.quantity = fullRemove ? 0 : product.quantity - 1;
	cartProducts[product.id].quantity = product.quantity;

	dispatch(updateProduct({ id: product.id, quantity: product.quantity }));
	dispatch(updateCart(objectToArray(cartProducts)));

	return dispatch({
		type: cartActionTypes.REMOVE_FOOD_CART,
		payload: { product, fullRemove }
	});
};
