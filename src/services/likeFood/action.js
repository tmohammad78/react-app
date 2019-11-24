import { ADD_TO_LIKE } from './actionType';

export const addFoodLike = food => dispatch => {
  return dispatch({
    type: ADD_TO_LIKE,
    food
  });
};
