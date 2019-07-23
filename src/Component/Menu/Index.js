import React, { Fragment, useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMenu } from '../../services/menu/actions';

import Sort from './sort/index';
import Spinner from '../Spinner';
import FoodListTable from './FoodListTable';

// import Category from '../Category/index';
import './style.scss';

const Menu = props => {
  const sort = props.sort;
  const [loading, setLoading] = useState();
  let willUnmount = false;

  useEffect(() => {
    setLoading(true);
    props.fetchMenu(sort, () => {
      if (!willUnmount) {
        setLoading(false);
      }
    });

    return () => {
      willUnmount = true;
    };
  }, [sort]);

  return (
    <Fragment>
      {loading && <Spinner />}
      {/* <Category item={props.categoryList} /> */}
      <Sort />
      <FoodListTable />
    </Fragment>
  );
};

Menu.propTypes = {
  fetchMenu: PropTypes.func,
  sort: PropTypes.string
  // categoryList: PropTypes.object
};

const mapStateToProps = state => ({
  foodList: state.menu.foodList,
  categoryList: state.menu.categoryList,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchMenu }
)(memo(Menu));
