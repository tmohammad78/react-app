import { LOAD_CART, ADD_FOOD, REMOVE_FOOD, ADD_FOOD_CART, UPDATE_CART ,REMOVE_FOOD_CART} from './actionTypes';

const initialState = {
  products: [],
  items: {},
  foodToAdd: {},
  cartTotal: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload
      };
    case UPDATE_CART:
      return {
		  ...state,
		  cartTotal:{...action.payload}
	  };
    case ADD_FOOD_CART:
      return {
        ...state,
        foodToAdd: { ...action.payload }
      };
    // case ADD_FOOD:
    //   return {
    //     ...state,
    //     foodToAdd: { ...action.payload }
    //   };
    case REMOVE_FOOD_CART:
      return {
        ...state,
        foodToRemove: { ...action.payload }
      };
    default:
      return state;
  }
}
