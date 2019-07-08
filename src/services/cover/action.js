import { FETCH_DATA } from "./actionType";
import axios from "axios";
import { resturantData } from "../util";

export const fetchData = () => dispatch => {
	return axios
		.get(resturantData)
		.then(res => {
			let resInfo = res.data;
			return dispatch({
				type: FETCH_DATA,
				payload: resInfo
			});
		})
		.catch(err => {
			console.log("Could not fetch products. Try again later.");
		});
};
