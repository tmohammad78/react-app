import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import newRootReducer from "../client/Redux/reducers";
import instance from '../API/api';

export default (req: any) => {
	// const axiosInstance = axios.create({
	// 	baseURL: "http://react-ssr-api.herokuapp.com",
	// 	headers: { cookie: req.get("cookie") || "" },
	// });
	const store = createStore(
		newRootReducer,
		{},
		applyMiddleware(thunk.withExtraArgument(instance))
	);
	console.log('in create store ',store)
	return store;
};
