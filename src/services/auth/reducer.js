import { AUTH_LOGIN, AUTH_LOGUOT } from "./actionType";

const initialState = {
	username: ""
};

export default function(state = initialState, action) {
	switch (action.type) {
		case AUTH_LOGIN:
			return {
				...state,
				username: action.payload
			};
		case AUTH_LOGUOT:
			return initialState;
		default:
			return state;
	}
}
