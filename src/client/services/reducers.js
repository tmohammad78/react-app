import { combineReducers } from 'redux';
import menuReducer from './menu/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import coverReducer from './cover/reducer';
import sortReducer from './sort/reducer';
import subFoodReducer from './subFood/reducer';
import likeFoodReducer from './likeFood/reducer';
import authReducer from './auth/reducer';

const newRootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  resInfo: coverReducer,
  total: totalReducer,
  sort: sortReducer,
  subFood: subFoodReducer,
  likeFood: likeFoodReducer,
  auth: authReducer
});

export default newRootReducer;