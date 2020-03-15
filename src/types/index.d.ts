
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
	readonly foodToAdd: IFoodList | object;
	readonly cartTotal: object;
}

export interface SubFoodState {
	readonly food: ISubFood[],
	readonly show: boolean
}

export interface MenuState {
	foodListItem: IFoodList[] | object,
	foodList: IFoodList[] | null,
	categoryList: ICategory[]
}

export interface LikeFoodState {
	likeFood: IFoodList[] | object
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

/// modal
export interface IModal {
	subFood?: boolean;
	show: boolean;
	onClose: () => void;
	closeOnEsc?: boolean;
	style?: object;
	children: React.ReactNode;

}