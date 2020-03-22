import { ILoadCartAction, IUpdateCartAction, IRemoveFoodCartAction, IAddFoodCartAction, cartActionTypes } from './actionTypes';
import { updateProduct } from 'services/menu/actions';
import { objectToArray } from 'helper/index';
import { Dispatch, ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IFoodList } from 'types';
import { IApplicationState } from '../reducers';

export const loadCart: ActionCreator<ILoadCartAction> = (products) => ({
	type: cartActionTypes.LOAD_CART,
	products
});

export const addFood: ActionCreator<ThunkAction<AnyAction, IApplicationState, undefined, IAddFoodCartAction>> = (product: IFoodList, quantity: number = 1) => (dispatch: Dispatch, getState: () => IApplicationState) => {
	const cartProducts = getState().cart.items;
	let productInCart = false;
	let totalQuantity = quantity;
	objectToArray(cartProducts).forEach((item: IFoodList) => {
		if (item.id == product.id) {
			item.quantity += quantity;
			totalQuantity = item.quantity;
			productInCart = true;
		}
	});

	if (!productInCart) {
		product.quantity = quantity;
		cartProducts[product.id] = product;
	}
	dispatch(updateProduct({ id: product.id, quantity: totalQuantity }));
	dispatch(updateCart(objectToArray(cartProducts)));
	return dispatch({
		type: cartActionTypes.ADD_FOOD_CART,
		payload: { product, quantity }
	});
};

export const removeFood: ActionCreator<ThunkAction<AnyAction, IApplicationState, undefined, IRemoveFoodCartAction>> = (product: IFoodList, fullRemove: boolean = false) => (dispatch: Dispatch<AnyAction>, getState: () => IApplicationState) => {
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

export const updateCart: ActionCreator<IUpdateCartAction> = (cartProducts: IFoodList[]) => {
	// const totalProduct = objectToArray(cartProducts).reduce((sum, p) => {
	const totalProduct = cartProducts.reduce((sum, p) => {
		sum += p.quantity;
		return sum;
	}, 0);
	const totalPrice = cartProducts.reduce((sum, p) => {
		sum += p.price * p.quantity;
		return sum;
	}, 0);

	return ({
		type: cartActionTypes.UPDATE_CART,
		payload: {
			totalPrice,
			totalProduct
		}
	});
}