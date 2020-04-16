import React from 'react';

import DetailModal from '../FoodListTable/food/foodModal/index';
import FoodDetails from '../FoodListTable/food/details-holder/index';
import { FoodItem } from '../FoodListTable/food/style';
import { SubFoodStyle } from './style';
import { objectToArray } from '../../../Helper/index';
import { SubFoodState, ISubFood } from '../../../Types/index';
interface IProps {
	subFood: SubFoodState
}
const SubFood: React.SFC<IProps> = ({ subFood }) => {
	console.log('ddd', subFood);
	return (
		<SubFoodStyle>
			<DetailModal subfood={true} defaultDetail={subFood} food={subFood.food} />
			<div>
				{subFood.food.map((food, i) => {
					return (
						<FoodItem key={food.catId}>
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
