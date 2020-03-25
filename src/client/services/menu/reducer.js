import { FETCH_MENU, UPDATE_PRODUCT, LIKED_PRODUCT ,DISLIKED_PRODUCT} from './actionTypes';

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
    case LIKED_PRODUCT:
      return {
        ...state,
        foodListItem: {
          ...state.foodListItem,
          [action.payload.id]: {
            ...state.foodListItem[action.payload.id],
            like: true
          }
        }
      };

    case DISLIKED_PRODUCT:
      return {
        ...state,
        foodListItem: {
          ...state.foodListItem,
          [action.payload.id]: {
            ...state.foodListItem[action.payload.id],
            like: false
          }
        }
      };
    default:
      return state;
  }
}
