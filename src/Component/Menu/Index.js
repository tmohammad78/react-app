import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '../../services/menu/actions';
import './style.scss';

import Sort from './sort/index';
import Spinner from '../Spinner';
// import FoodListTable from './FoodListTable';
const Category = lazy(() => import('../Category/index'));
const FoodListTable = lazy(() => import('./FoodListTable'));
// import Category from '../Category/index';

const Menu = () => {
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.menu.foodList);
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
      {/* <Sort /> */}
      <Suspense fallback={<Spinner />}>
        <Category />
        {foodList && <FoodListTable items={foodList} />}
      </Suspense>
    </Fragment>
  );
};

Menu.propTypes = {
  fetchMenu: PropTypes.func,
  sort: PropTypes.string,
  categoryList: PropTypes.object.isRequired
};

export default Menu;
