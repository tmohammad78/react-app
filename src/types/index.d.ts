
export interface AuthState {
	readonly errorMessage: string,
	readonly token: string,
	readonly refreshToken: string,
	readonly expiresIn: string,
	readonly logged: boolean
}
export interface CartState {
	readonly products: IFoodList[];
	readonly items: IFoodList[];
	readonly foodToAdd: IFoodList[];
	readonly cartTotal: IFoodList[];
}

export interface MenuState {
	foodListItem: {},
	foodList: null,
	categoryList: ICategory[]
}

export interface LikeFoodState {
	likeFood: {}
}

//  ------


export interface ICategory {
	catId: number;
	catTitle: string;
	catLogo: string;
	catIndex: number;
}

export interface ISubFood {
	id: number;
	title: string,
	ingredient: string;
	img: string;
	archive: boolean | undefined;
	price: number,
	index: number;
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
	title: string,
	ingredient: string;
	img: string;
	archive: boolean | undefined;
	price: number,
	index: number;
	discount: number;
	discountPercentage: number;
	foodTag: string | undefined;
	available: boolean | undefined;
	unavailableText: string;
	subFoods: ISubFood | boolean;
	priceLabel: string;
	visible: boolean,
	stock: undefined | boolean;
	quantity: number
	packaging: number;
	saleOnRamadan: boolean;
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