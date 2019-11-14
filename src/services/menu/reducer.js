import { FETCH_MENU, UPDATE_PRODUCT } from './actionTypes';

const initialState = {
  foodList: [],
  categoryList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU: {
      const { foodList, categoryList } = action.payload;
      return {
        ...state,
        foodList,
        categoryList
      };
    }
    case UPDATE_PRODUCT:
      return {
        ...state,
        foodList: [...state.foodList]
      };
    default:
      return state;
  }
}
