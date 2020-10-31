// @ts-ignore
import { ICartItemsObject, IFoodList, INewFoodList } from '../Types/index';

export const currency = (numberValue: number, showToman: boolean = true) => {
	if (showToman && numberValue !== 0) {
		const final = numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		return `${toPersianNum(final)} تومان`;
	}
	if (!showToman) {
		const final = numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		return toPersianNum(final);
	} else {
		return null;
	}
};

export const discountPrice = (numberValue: number, discountPercentage: number) => {
	const price = numberValue - numberValue * (discountPercentage / 100);
	const final = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	return `${toPersianNum(final)} تومان`;
};

export const truncate = (str: string, num = 5) => {
	const arrStr = str.split(' ');
	if (str.length > num) {
		return `${arrStr.slice(0, num).join(' ')} ...`;
	} else {
		return str;
	}
};

interface IArray {
	[key: string]: string
}

export const toPersianNum = (value: any, dontTrim = false) => {
	let i = 0;
	const num = dontTrim ? value.toString() : value.toString().trim(',');
	const len = value.length;
	let res = '';
	let pos: string = '';
	const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

	for (i = 0; i < len; i++) {
		pos = persianNumbers[num.charAt(i)];
		if (pos) {
			res += pos;
		}
	}
	return res;
};

export const objectToArray = (objectList: ICartItemsObject) => {
	const list: IFoodList[] = [];
	Object.values(objectList).forEach((item: IFoodList) => {
		list[parseInt(item.index, 10)] = item;
	});

	return list;
};


export const arrayToObject = (list: IFoodList[], keyField = 'id'): INewFoodList[] => {
	return Object.assign(
		{},
		...list.map((item: IFoodList, index) => ({ [item.id]: { ...item, index } }))
	);
};
