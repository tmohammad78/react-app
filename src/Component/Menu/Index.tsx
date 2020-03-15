import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenu } from '../../services/menu/actions';
import Spinner from '../Spinner';
import { TabContentHolder } from '../../pages/order/style';
import { IApplicationState } from 'services/reducers';
import { IFoodList } from 'src/types/index';
const Category = lazy(() => import('../Category/index'));
const FoodListTable = lazy(() => import('./FoodListTable'));

const Menu: React.SFC = () => {
	const dispatch = useDispatch();
	const foodList = useSelector<IApplicationState, IFoodList[]>(state => state.menu.foodList);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!foodList) {
			dispatch(
				fetchMenu(() => {
					setLoading(false);
				})
			);
		} else {
			setLoading(false);
		}
	}, []);

	return (
		<TabContentHolder>
			<Suspense fallback={<Spinner />}>
				<Category />
				{!loading ? <FoodListTable itemFood={foodList} /> : <Spinner />}
			</Suspense>
		</TabContentHolder>
	);
};

export default Menu;
