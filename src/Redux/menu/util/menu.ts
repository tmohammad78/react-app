import _ from 'underscore';
import { IDataMain } from '../actionTypes';
import { ICategory, ISubFood, IFoodList, ISectionFood, ICategoryResponse } from 'Types/index';

function makeFoodItem(food: IFoodList) {
	return {
		id: food.id,
		title: food.title,
		index: food.index || 'default',
		ingredient: food.ingredient || '',
		img: food.img || '',
		archive: typeof food.archive !== 'undefined' ? food.archive : false,
		price: food.price,
		discount: food.discount || 0,
		discountPercentage: food.discountPercentage || 0,
		foodTag: food.foodTag || undefined,
		available: typeof food.available !== 'undefined' ? food.available : true,
		unavailableText: food.unavailableText || '',
		stock: typeof food.stock !== "undefined" ? food.stock : true,
		subFoods: food.subFoods || false,
		priceLabel: food.priceLabel || '',
		visible: true,
		like: false,
		quantity: 0,
		saleOnRamadan: food.saleOnRamadan
	}

}

function subFoodData(foods: ISubFood[]) {

	let allPriceIsSame = true;
	const firstFood = foods[0];
	let lowPrice = firstFood.price;
	let maxDiscount = 0;
	let ingredient = '';

	for (let i = 0; i < foods.length; i++) {
		if (foods[i].discountPercentage > 0) {
			if (foods[i].discountPercentage > maxDiscount) {
				maxDiscount = foods[i].discountPercentage;
			}
			const priceWithDiscount = foods[i].price - foods[i].discount;
			if (priceWithDiscount < lowPrice) {
				lowPrice = priceWithDiscount;
			}
		} else if (foods[i].price < lowPrice) {
			lowPrice = foods[i].price;
		}

		if (foods[i].price !== firstFood.price) {
			allPriceIsSame = false;
		}

		if (foods[i].ingredient) {
			ingredient = foods[i].ingredient;
		}
	}
	return {
		ingredient,
		lowPrice,
		maxDiscount,
		samePrice: allPriceIsSame
	};
}

const parseMenu = (data: IDataMain, sort?: any) => {
	const list: IFoodList[] = [];
	const categoryList: ICategory[] = [];
	if (data.categories) {
		data.categories = _.sortBy(data.categories, (c: any) => c.index);
		data.categories.forEach((category: ICategoryResponse) => {
			const sectionList = category.sub;
			if (sectionList && sectionList.length) {
				let foodList: IFoodList[] = [];
				sectionList.forEach((section) => {
					const foods = section.food;
					if (foods && foods.length) {
						if (parseInt(section.id) === 0) {
							foods.forEach((food: IFoodList) => {
								const foodItem = makeFoodItem(food);
								if (foodItem) {
									foodList.push(foodItem);
								}
							});
						} else {
							let subFoods: ISubFood[] = [];
							// if IFoodList be ISubFood we have 	packaging: number; saleOnRamadan: boolean; elements in subfood
							const subQuantity: number = 0;
							let subAvailable = false;
							let subUnavailableText = 'عدم موجودی';

							foods.forEach((food: IFoodList) => {
								const foodItem = makeFoodItem(food);
								if (foodItem) {
									subFoods.push(foodItem);

									if (food.available) {
										subAvailable = true;
										subUnavailableText = '';
									}
								}
							});

							subFoods = _.sortBy(subFoods, (food: ISubFood): string => {
								return food.index;
							});

							if (subFoods.length > 0) {
								const subData = subFoodData(subFoods);
								const quantity: number = 0;
								let priceLabel = section.priceLabel && section.priceLabel.trim();
								if (!priceLabel) {
									priceLabel = (subData.samePrice ? '' : ' از ') + subData.lowPrice;
								}
								const foodItemWithSub = makeFoodItem({
									id: section.id,
									title: section.title,
									index: section.index,
									ingredient: section.description || '', // || subData.ingredient || "",
									img: section.img,
									discount: 0,
									price: parseInt(section.priceLabel),
									discountPercentage: subData.maxDiscount,
									available: subAvailable,
									unavailableText: subUnavailableText,
									priceLabel,
									like: false,
									quantity: quantity,
									subFoods
								});

								if (subQuantity) {
									// foodItemWithSub.quantity = subQuantity;
								}

								foodList.push(foodItemWithSub);
							}
						}
					}
				});
				if (foodList.length > 0) {
					if (sort) {
						const sortType = sort === 'lowestprice' ? 1 : -1;
						foodList = _.sortBy(foodList, (food: IFoodList) => {
							return food.price * sortType;
						});
					} else {
						foodList = _.sortBy(foodList, (food: IFoodList) => {
							return food.index;
						});
					}

					foodList.forEach(item => {
						list.push({
							catId: category.id,
							categoryTitle: category.title,
							categoryIndex: category.index || 0,
							...item
						});
					});
				}
			}

			categoryList.push({
				catId: category.id,
				catTitle: category.title,
				catLogo: category.logo,
				catIndex: category.index
			});
		});
	}

	return {
		foodList: list,
		categoryList
	};
};

export default parseMenu;
