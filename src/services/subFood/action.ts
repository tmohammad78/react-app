import { ISubFoodModal, ICloseSubFoodModal, subFoodActionTypes } from './actionType';
import { ActionCreator } from 'redux';
import { IFoodList, ISubFood } from 'src/types';

export const SubFoodModal: ActionCreator<ISubFoodModal> = (food, open = true) => {
	return {
		type: subFoodActionTypes.SET_SUBFOOD,
		payload: {
			food,
			show: true
		}
	}
}

export const closeSubFoodModal: ActionCreator<ICloseSubFoodModal> = (close: boolean = true) => {
	return {
		type: subFoodActionTypes.CLOSE_MODAL,
		show: false
	};
};
