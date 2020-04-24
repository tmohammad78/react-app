import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import newRootReducer from "../client/Redux/reducers";
import instance from '../API/api';

export default (req: any) => {
	// const axiosInstance = axios.create({
	// 	baseURL: "http://react-ssr-api.herokuapp.com",
	// 	headers: { cookie: req.get("cookie") || "" },
	//   });
	console.log('ddddddddd');
	const store = createStore(
		newRootReducer,
		{},
		applyMiddleware(thunk.withExtraArgument(instance))
	);
	console.log('store', store)
	return store;
};
