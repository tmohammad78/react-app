import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import updateSort from '../../../services/sort/action';
import Selectbox from '../../Selectbox/index';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'ارزان ترین' },
  { value: 'highestprice', label: 'گران ترین' }
];

const Sort = props => {
  const handleSort = value => {
    props.updateSort(value);
  };

  return <Selectbox options={sortBy} handleOnChange={handleSort} />;
};
Sort.propTypes = {
  updateSort: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
