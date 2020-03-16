import { string } from "yup"

export interface AuthState {
	errorMessage: string,
	token: string,
	refreshToken: string,
	expiresIn: string,
	logged: boolean
}
export interface ICartItemsObject {
	[key: number]: IFoodList
}
export interface CartState {
	products: IFoodList[];
	items: ICartItemsObject;
	foodToAdd: IFoodList | object;
	cartTotal: object;
}

export interface ICartTotalStateObject {
	productQuantity: number,
	totalPrice: number
}
export interface ICartTotalState {
	[type: string]: ICartTotalStateObject
}

export interface SubFoodState {
	food: IFoodList[],
	show: boolean
}


export interface testing {
	[key: string]: IFoodList[] | object
}
export interface MenuState {
	foodListItem: testing,
	foodList: IFoodList[] | null,
	// | null for foodlist
	categoryList: ICategory[]
}


export interface TestLikeState {
	[key: number]: IFoodList
}
export interface LikeFoodState {
	likeFood: TestLikeState
}

//  ------
export interface MyFormValues {
	email: string,
	phonenumber: string,
	password: string
}

export interface ICategory {
	catId: number;
	catTitle: string;
	catLogo: string;
	catIndex: number;
}

export interface ISubFood {
	id: number;
	index: number;
	title: string,
	ingredient: string;
	img: string;
	archive: boolean | undefined;
	price: number,
	discount: number;
	discountPercentage: number;
	foodTag: string | undefined;
	available: boolean | undefined;
	unavailableText: string;
	priceLabel: string;
	visible: boolean,
	stock: undefined | boolean;
	quantity: number
	packaging: number;
	saleOnRamadan: boolean;
}

export interface IFoodList {
	id: number;
	index: number;
	title: string,
	ingredient: string;
	img: string;
	archive?: boolean | undefined;
	price: number,
	discount?: number;
	discountPercentage: number;
	foodTag?: string | undefined;
	available: boolean | undefined;
	unavailableText: string;
	priceLabel: string;
	visible?: boolean,
	stock?: undefined | boolean;
	quantity: number
	packaging?: number;
	saleOnRamadan?: boolean;
	subFoods: ISubFood[] | boolean;
}

export interface ISectionFood {
	description: string;
	food: IFoodList[];
	id: number;
	img: string;
	index: number;
	priceLabel: string;
	title: string;
}

export interface ICategoryResponse {
	id: number;
	title: string;
	logo: string;
	index: number;
	sub: ISectionFood[]
}

/// modal
export interface IModal {
	subFood?: boolean;
	show: boolean;
	onClose: () => void;
	closeOnEsc?: boolean;
	style?: object;
	children: React.ReactNode;

}