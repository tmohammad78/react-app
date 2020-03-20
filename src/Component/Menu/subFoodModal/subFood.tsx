import React from 'react';

import DetailModal from '../FoodListTable/food/foodModal';
import FoodDetails from '../FoodListTable/food/details-holder';
import { FoodItem } from '../FoodListTable/food/style';
import { SubFoodStyle } from './style.js';
import { IFoodList } from 'src/types';

const SubFood = ({ subfood }: ISubFood[]) => {
	return (
		<SubFoodStyle>
			<DetailModal subfood={true} defaultDetail={subfood} food={subfood} />
			<div>
				{subfood.subFoods.map((food, i) => {
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
