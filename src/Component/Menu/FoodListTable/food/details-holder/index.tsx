import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import Ingredient from '../foodDetails/ingredient';
import Price from '../foodDetails/price';
import QtyHolder from '../foodDetails/qty-holder';
import Tittle from '../foodDetails/Tittle';
import LikeFood from '../foodDetails/likeFood';

import './style.scss';
import { IFoodList } from 'src/types';
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

	const renderMemoDetail = useMemo(() => {
		return <Detail />;
	}, [Detail]);

	return (
		<div className='details-holder clearfix'>
			{/* {renderMemoDetail} */}
			<Detail />
			<QtyHolder food={food} />
		</div>
	);
};

Details.propTypes = {
	food: PropTypes.object
};
export default Details;
