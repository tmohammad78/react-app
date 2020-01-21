import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenu } from '../../services/menu/actions';
import Spinner from '../Spinner';
import Skeleton from 'component/skeleton';

const Category = lazy(() => import('../Category/index'));
const FoodListTable = lazy(() => import('./FoodListTable'));

const Menu = () => {
  const dispatch = useDispatch();
  const foodList = useSelector(state => state.menu.foodList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(
      fetchMenu(() => {
        setLoading(false);
      })
    );
  }, []);

  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Category />
        {!loading ? <FoodListTable items={foodList} /> : <Spinner/>}
      </Suspense>
    </Fragment>
  );
};

export default Menu;
