import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onfilterText(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onChangeStock(e.target.checked);
  }

  render() {
    return (
      <React.Fragment>
        <div className='filter-box clearfix'>
          <div className='filter-search'>
            <input type='text' value={this.props.filterText} onChange={this.handleTextChange} />
            <span className='placeholder'>جستجوی غذا</span>
            <span className='search-icon'>
              <i className='fo fo-search' />
            </span>
          </div>
          <div className='filter-check'>
            <label htmlFor='checkbox' className='custom-checkbox'>
              <input
                type='checkbox'
                className='styled_checkbox'
                checked={this.props.inStock}
                onChange={this.handleInStockChange}
                id='checkbox'
              />
              <span />
              غذاهای موجود
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
SearchBar.propTypes = {
  onfilterText: PropTypes.func,
  onChangeStock: PropTypes.func,
  inStock: PropTypes.bool,
  filterText: PropTypes.func
};
export default SearchBar;
