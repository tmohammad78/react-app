import { ADD_TO_LIKE, DELETE_TO_LIKE, UPDATE_FOODLIKE } from './actionType';
import { likeProduct, dislikeProduct } from '../menu/actions';

export const addFoodLike = food => dispatch => {
  dispatch(likeProduct({ id: food.id }));
  return dispatch({
    type: ADD_TO_LIKE,
    food
  });
};

export const removeFoodLike = food => (dispatch, getState) => {
  const likeFood = getState().likeFood.likeFood;
  delete likeFood[food.id];
  dispatch(dislikeProduct({ id: food.id }));
//   dispatch(updateLike());
  return dispatch({
    type: DELETE_TO_LIKE,
    likeFood
  });
};

// export const updateLike = () => (dispatch, getState) => {
//   debugger;
//   const likeFood = getState().likeFood.likeFood;
//   return dispatch({
//     type: UPDATE_FOODLIKE,
//     likeFood
//   });
// };
