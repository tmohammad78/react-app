import { ISubFoodModal, ICloseSubFoodModal, subFoodActionTypes } from './actionType';
import { ActionCreator } from 'redux';
import { IFoodList, ISubFood } from 'src/types';

export const SubFoodModal: ActionCreator<ISubFoodModal> = (food: ISubFood[], open: boolean = true) => {
	return {
		type: subFoodActionTypes.SET_SUBFOOD,
		payload: {
			food,
			show: open
		}
	}
}

export const closeSubFoodModal: ActionCreator<ICloseSubFoodModal> = (close: boolean = true) => {
	return {
		type: subFoodActionTypes.CLOSE_MODAL,
		show: false
	};
};
