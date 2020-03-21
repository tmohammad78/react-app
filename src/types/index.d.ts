

export interface AuthState {
	errorMessage: string,
	token: string,
	refreshToken: string,
	expiresIn: string,
	logged?: boolean | string | undefined
}
export interface ICartItemsObject {
	[key: string]: IFoodList
}
export interface CartState {
	products: IFoodList[];
	items: ICartItemsObject;
	foodToAdd: IFoodList | object;
	cartTotal: ICartTotalState;
}

export interface ICartTotalState {
	[type: string]: number
}

export interface SubFoodState {
	food: IFoodList[],
	show: boolean
}

export interface ITTT {
	food: testing;
	like: boolean;
}
export interface testing {
	[key: string]: INewFoodList
}
export interface MenuState {
	foodListItem: testing,
	foodList: IFoodList[],
	// | null for foodlist
	categoryList: ICategory[]
}


export interface TestLikeState {
	[key: string]: INewFoodList
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
	id: string;
	index: string;
	title: string,
	ingredient: string;
	img: string;
	archive?: boolean | undefined;
	price: number,
	discount: number;
	discountPercentage: number;
	foodTag?: string | undefined;
	available: boolean | undefined;
	unavailableText: string;
	priceLabel: string;
	visible?: boolean,
	stock?: undefined | boolean;
	quantity: number
	saleOnRamadan?: boolean;
}

export interface IFoodList extends ISubFood {
	catId?: number,
	categoryTitle?: string,
	categoryIndex?: number,
	subFoods: ISubFood[];
}
interface INewFoodList extends IFoodList {
	like: boolean
}

export interface ISectionFood {
	description: string;
	food: IFoodList[];
	id: string;
	img: string;
	index: string;
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
	className: string,
	show: boolean;
	onClose: () => void;
	closeOnEsc?: boolean;
	style?: object;
	children: React.ReactNode;

}