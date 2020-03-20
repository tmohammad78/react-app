import React, { useMemo } from 'react';

import Ingredient from '../foodDetails/ingredient';
import Price from '../foodDetails/price';
import QtyHolder from '../foodDetails/qty-holder';
import Tittle from '../foodDetails/Tittle';
import LikeFood from '../foodDetails/likeFood';
import { IFoodList } from 'src/types';

import './style.scss';

interface Props {
	food: IFoodList
}
const Details = ({ food }: Props) => {

	const Detail = () => {
		return (
			<React.Fragment>
				<Tittle tittle={food.title} />
				<Ingredient ingredient={food.ingredient} />
				<Price price={food.price} />
				<LikeFood food={food} />
			</React.Fragment>
		);
	};

	return (
		<div className='details-holder clearfix'>
			<Detail />
			<QtyHolder food={food} />
		</div>
	);
};

export default Details;
