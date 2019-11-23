import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import updateSort from '../../../services/sort/action';
import Selectbox from '../../Selectbox/index';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'ارزان ترین' },
  { value: 'highestprice', label: 'گران ترین' }
];

const Sort = (props) => {
  const sort = useSelector((state) => state.sort.type);
  const dispatch = useDispatch();
  
  const handleSort = (value) => {
    dispatch(updateSort(value));
  };

  return <Selectbox options={sortBy} handleOnChange={handleSort} />;
};
Sort.propTypes = {
  updateSort: PropTypes.func.isRequired
};

export default Sort;
