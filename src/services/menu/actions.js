import { FETCH_MENU, UPDATE_PRODUCT } from "./actionTypes";
import axios from "axios";
import { restaurantMenu } from "../util";
import { parseMenu } from "./util/menu";
const compare = {
	lowestprice: (a, b) => {
		if (a.price < b.price) return -1;
		if (a.price > b.price) return 1;
		return 0;
	},
	highestprice: (a, b) => {
		if (a.price > b.price) return -1;
		if (a.price < b.price) return 1;
		return 0;
	}
};

const Data = {
	categoryList: null
};


export const updateProduct = product => ({
	type: UPDATE_PRODUCT,
	payload: product
});

export const fetchMenu = (sortBy, callback) => (dispatch, getState) => {

	const productLoaded = (categoryList)=>{
		
		if (!!sortBy) {
			categoryList.forEach(category => {
				category.foods = category.foods.sort(compare[sortBy]);
				console.log(category);
			});
		}
		if (!!callback) {
			callback();
		}

		// cart.forEach(cart => {
		// 	const product = categoryList.find(x => x.id === cart.id);
		// 	if (product) {
		// 		product.quantity = cart.quantity;
		// 	}
		// });

		Data.categoryList = categoryList;
		
		return dispatch({
			type: FETCH_MENU,
			payload: categoryList
		});
	}

	const cart = getState().cart.categoryList;
	if (Data.categoryList !== null) {
		return productLoaded(Data.categoryList)
	}

	return axios
		.get(restaurantMenu)
		.then(res => {
			const parsedData = parseMenu(res.data);
			return productLoaded(parsedData)
		})
		.catch(err => {
			console.log("Could not fetch categoryList. Try again later.");
		});
};


