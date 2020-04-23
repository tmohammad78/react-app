import React, { useMemo } from 'react';

import Ingredient from '../foodDetails/ingredient/index';
import Price from '../foodDetails/price/index';
import QtyHolder from '../foodDetails/qty-holder/index';
import Tittle from '../foodDetails/Tittle/index';
import LikeFood from '../foodDetails/likeFood/index';
import { INewFoodList } from '../../../../../../Types/index';

import './style.scss';

interface Props {
	food: INewFoodList
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
