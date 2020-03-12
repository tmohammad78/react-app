import { combineReducers } from 'redux';
import { menuReducer } from './menu/reducer';
import { cartReducer } from './cart/reducer';
import totalReducer from './total/reducer';
import coverReducer from './cover/reducer';
import subFoodReducer from './subFood/reducer';
import { likeFoodReducer } from './likeFood/reducer';
import { authReducer } from './auth/reducer';
import { AuthState, MenuState, CartState, LikeFoodState } from '../types/index';

interface IApplicationState {
	menu: MenuState,
	cart: CartState,
	auth: AuthState,
	likeFood: LikeFoodState
}
const newRootReducer = combineReducers<IApplicationState>({
	menu: menuReducer,
	cart: cartReducer,
	resInfo: coverReducer,
	total: totalReducer,
	subFood: subFoodReducer,
	likeFood: likeFoodReducer,
	auth: authReducer
});

export default newRootReducer;
