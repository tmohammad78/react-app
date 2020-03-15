import { IFoodList } from "src/types";

export const currency = (number: number, showToman: boolean = true) => {
	if (showToman && number !== 0) {
		const realPrice = number;
		const final = realPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

		return `${toPersianNum(final)} تومان`;
	}
	if (showToman === false) {
		const realPrice = number;
		const final = realPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		return toPersianNum(final);
	}
};

export const discountPrice = (number: number, discountPercentage: number) => {
	const price = number - number * (discountPercentage / 100);
	const final = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	return `${toPersianNum(final)} تومان`;
};

export const truncate = (str: string, num = 5) => {
	const arrStr = str.split(' ');
	if (str.length > num) {
		return `${arrStr.slice(0, num).join(' ')} ...`;
	}
	return str;
};

export const toPersianNum = (value: any, dontTrim = false) => {
	let i = 0;
	const num = dontTrim ? value.toString() : value.toString().trim(',');
	const len = value.length;
	let res = '';
	let pos = [];
	const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

	for (i = 0; i < len; i++) {
		pos = persianNumbers[num.charAt(i)];
		if (pos) {
			res += pos;
		}
	}
	return res;
};

export const objectToArray = (objectList: IFoodList[]) => {
	const list: IFoodList[] = [];
	Object.values(objectList).forEach((item: IFoodList) => {
		list[item.index] = item;
	});

	return list;
};

export const arrayToObject = (list: array, keyField = 'id') => {
	return Object.assign(
		{},
		...list.map((item, index) => ({ [item[keyField]]: { ...item, index } }))
	);
};
