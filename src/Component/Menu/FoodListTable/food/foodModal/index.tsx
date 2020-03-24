import React, { useMemo } from 'react';

import FoodImge from '../foodDetails/foodImage';
import Tittle from '../foodDetails/Tittle';
import Ingredient from '../foodDetails/ingredient';
import QtyHolder from '../foodDetails/qty-holder';
import Price from '../foodDetails/price';
import { IFoodList } from 'types';

import './style.scss';

interface IProps {
	subfood?: boolean;
	defaultDetail: IFoodList;
	food: IFoodList;
}

const DetailModal: React.SFC<IProps> = ({ subfood = false, defaultDetail: items, food }) => {
	const Test = () => (
		<React.Fragment>
			<FoodImge image={items.img} />
			<Tittle tittle={items.title} />
			<Ingredient ingredient={items.ingredient} checkTruncate={false} />
		</React.Fragment>
	);
	const renderDefault = useMemo(() => {
		return <Test />;
	}, [Test]);

	return (
		<div className='modal-food'>
			{renderDefault}
			<div className='block'>
				<Price price={items.price ? items.price : 0} />
				{subfood ? null : <QtyHolder food={food} />}
			</div>
		</div>
	);
};
export default DetailModal;
