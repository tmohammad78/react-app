import { ISubFood, IFoodList } from "../../../Types/index";

export const SET_SUBFOOD = 'SET_SUBFOOD';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export enum subFoodActionTypes {
	SET_SUBFOOD = 'SET_SUBFOOD',
	CLOSE_MODAL = 'CLOSE_MODAL'
}

export interface ISubFoodModal {
	type: subFoodActionTypes.SET_SUBFOOD,
	payload: {
		food: IFoodList[],
		show: boolean
	}
}

export interface ICloseSubFoodModal {
	type: subFoodActionTypes.CLOSE_MODAL,
	show: boolean
}

export type SubFoodSystemAction = ISubFoodModal | ICloseSubFoodModal; 