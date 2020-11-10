import { useState, useEffect, Suspense, lazy, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenu } from '../../Redux/menu/actions';
import Spinner from '../Spinner/index';
import { TabContentHolder } from '../../pages/order/style';
import { IApplicationState } from '../../Redux/reducers';
import { IFoodList } from '../../types/index';
import Category from '../Category/index';
import React from 'react';

const FoodListTable = lazy(() => import('./FoodListTable/index'));

const Menu: FunctionComponent<any> = () => {
	const dispatch = useDispatch();
	const foodList = useSelector<IApplicationState, IFoodList[]>(state => state.menu.foodList);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (foodList.length === 0) {
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
