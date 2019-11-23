import { SET_SUBFOOD, CLOSE_MODAL } from './actionType';

export const SubFoodModal = (food, open = true) => (dispatch) => {
  let arrayFood = [];
  food.subFoods.map((item, i) => {
    return arrayFood.push(item);
  });
  dispatch({
    type: SET_SUBFOOD,
    payload: {
      food: arrayFood,
      show: open
    }
  });
};

export const closeSubFoodModal = (close = true) => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
    show: false
  });
};
