import { combineReducers } from 'redux';
import menuReducer from './menu/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import coverReducer from './cover/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  resInfo: coverReducer,
  total: totalReducer,
  sort: sortReducer
});
