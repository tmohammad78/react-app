import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenu } from '../../services/menu/actions';
import Spinner from '../Spinner';

const Category = lazy(() => import('../Category/index'));
const FoodListTable = lazy(() => import('./FoodListTable'));

const Menu = () => {
  const dispatch = useDispatch();
  const foodList = useSelector(state => state.menu.foodList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(foodList , loading);
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
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Category />
        {!loading ? <FoodListTable items={foodList} /> : <Spinner />}
      </Suspense>
    </Fragment>
  );
};

export default Menu;
