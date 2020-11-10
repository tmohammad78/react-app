import React, { FunctionComponent } from 'react';

import DetailModal from '../FoodListTable/food/foodModal/index';
import FoodDetails from '../FoodListTable/food/details-holder/index';
import { FoodItem } from '../FoodListTable/food/style';
import { SubFoodStyle } from './style';
import { IFoodList } from '../../../types';

interface IProps {
	subFood: IFoodList
}

const SubFood: FunctionComponent<IProps> = ({ subFood }) => {
	return (
		<SubFoodStyle>
			<DetailModal subfood={true} defaultDetail={subFood} />
			<div>
				{subFood.subFoods.map((food, i) => {
					return (
						<FoodItem key={i}>
							<section>
								<FoodDetails food={food} />
							</section>
						</FoodItem>
					);
				})}
			</div>
		</SubFoodStyle>
	);
};

export default SubFood;
