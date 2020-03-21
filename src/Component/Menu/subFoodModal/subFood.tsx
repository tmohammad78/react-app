import React from 'react';

import DetailModal from '../FoodListTable/food/foodModal';
import FoodDetails from '../FoodListTable/food/details-holder';
import { FoodItem } from '../FoodListTable/food/style';
import { SubFoodStyle } from './style.js';
import { SubFoodState, ISubFood } from 'src/types';
interface IProps {
	subFood: SubFoodState
}
const SubFood = ({ subFood }: IProps) => {
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
