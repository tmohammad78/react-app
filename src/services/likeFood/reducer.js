import { ADD_TO_LIKE, DELETE_TO_LIKE } from './actionType';
const initialState = {
  likeFood: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIKE: {
      const { food } = action;
      return {
        ...state,
        likeFood: {
          ...state.likeFood,
          [food.id]: food
        }
      };
    }
    case DELETE_TO_LIKE: {
      const { likeFood } = action;
      return {
        ...state,
        likeFood
      };
    }
    default:
      return state;
  }
}
