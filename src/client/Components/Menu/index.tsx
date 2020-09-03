import React, { Fragment, useState, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenu } from '../../Redux/menu/actions';
import Spinner from '../Spinner/index';
import { TabContentHolder } from '../../Pages/order/style';
import { IApplicationState } from '../../Redux/reducers';
import { IFoodList } from '../../../Types/index';
import Category from '../Category/index';
import FoodListTable from './FoodListTable/index';

const Menu: React.SFC = () => {
  const dispatch = useDispatch();
  const foodList = useSelector<IApplicationState, IFoodList[]>((state) => state.menu.foodList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('ddd');
    if (foodList.length == 0) {
      dispatch(fetchMenu());
    }
  }, []);

  return (
    <TabContentHolder>
      <Category />
      {loading ? <FoodListTable itemFood={foodList} /> : <Spinner />}
    </TabContentHolder>
  );
};

export default Menu;
