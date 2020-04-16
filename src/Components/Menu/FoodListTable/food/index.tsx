import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FoodDetails from './details-holder/index';
import DetailModal from './foodModal/index';
import Modal from '../../../../Components/Modal/index';
import FoodImage from './foodDetails/foodImage/index';
import FoodBadge from './foodDetails/FoodBadge/index';
import Portal from '../../../../Components/Portal/index';
import { SubFoodModal } from '../../../../Redux/subFood/action';

import { FoodItem } from './style';
import { IApplicationState } from '../../../../Redux/reducers';
import { IFoodList, INewFoodList } from '../../../../Types/index';
interface IProps {
	food: IFoodList
}
const Food: React.SFC<IProps> = ({ food }) => {
	const ActiveclassName = [];
	const newItem = useSelector<IApplicationState, INewFoodList>(state => state.menu.foodListItem[food.id]);
	const dispatch = useDispatch();
	const [showModal, SetShowModal] = useState(false);
	if (food.quantity > 0) {
		ActiveclassName.push('active-box');
	}

	const handleshowModal = useCallback(() => {
		if (food.subFoods.length > 0) {
			dispatch(SubFoodModal(food));
		} else {
			SetShowModal(() => !showModal);
		}
	}, [showModal, food.subFoods]);

	const renderImage = useMemo(() => {
		return (
			<div onClick={handleshowModal}>
				<FoodImage image={food.img} />
			</div>
		);
	}, [FoodImage]);

	return (
		<FoodItem>
			<section
				className={
					ActiveclassName[0] || ''
				}
			>
				<FoodBadge quantity={newItem.quantity} />
				{renderImage}
				<FoodDetails food={newItem} />

				{showModal ? (
					<Portal>
						<Modal show={showModal} onClose={handleshowModal}>
							<DetailModal defaultDetail={food} food={newItem} />
						</Modal>
					</Portal>
				) : null}
			</section>
		</FoodItem>
	);
};


export default Food;
