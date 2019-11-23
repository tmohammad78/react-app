import { SET_SUBFOOD, CLOSE_MODAL } from './actionType';

const initialState = {
  food: [],
  show: false,
  totalSubFood: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SUBFOOD: {
      const { food, show } = action.payload;
      return {
        show,
        food
      };
    }
    case CLOSE_MODAL: {
      return {
        show: action.show
      };
    }
    default:
      return state;
  }
}
