import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import updateSort from '../../../services/sort/action';
import Selectbox from '../../Selectbox/index';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];

class Sort extends Component {
  static propTypes = {
    updateSort: PropTypes.func.isRequired
  };

  handleSort = value => {
    this.props.updateSort(value);
  };

  render() {
    return <Selectbox options={sortBy} handleOnChange={this.handleSort} />;
  }
}

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
