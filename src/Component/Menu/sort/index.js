import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import updateSort from 'services/sort/action';
import Selectbox from 'component/Selectbox';

const Sort = ({ onChange }) => {
  const dispatch = useDispatch();

  const handleSort = value => {
    onChange(value);
    // dispatch(updateSort(value));
  };

  return <Selectbox  handleOnChange={handleSort} />;
};
Sort.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Sort;
