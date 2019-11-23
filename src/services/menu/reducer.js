import { FETCH_MENU, UPDATE_PRODUCT } from './actionTypes';

const initialState = {
  foodListItem: {},
  foodList: null,
  categoryList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU: {
      const { foodList, categoryList, foodListItem } = action.payload;
      return {
        ...state,
        foodListItem,
        foodList,
        categoryList
      };
    }
    case UPDATE_PRODUCT:
      return {
        ...state,
        foodListItem: {
          ...state.foodListItem,
          [action.payload.id]: {
            ...state.foodListItem[action.payload.id],
            quantity: action.payload.quantity
          }
        }
      };
    default:
      return state;
  }
}
