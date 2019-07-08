import { FETCH_DATA } from "./actionType";
const initialState = {
	resInfo: []
};
export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				resInfo: action.payload
			};
		default:
			return state;
	}
}
