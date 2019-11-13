import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SearchBar = props => {
  const handleTextChange = e => {
    props.onfilterText(e.target.value);
  };

  const handleInStockChange = e => {
    props.onChangeStock(e.target.checked);
  };

  return (
    <Fragment>
      <div className='filter-box clearfix'>
        <div className='filter-search'>
          <input type='text' value={props.filterText} onChange={handleTextChange} />
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
              checked={props.inStock}
              onChange={handleInStockChange}
              id='checkbox'
            />
            <span />
            غذاهای موجود
          </label>
        </div>
      </div>
    </Fragment>
  );
};
SearchBar.propTypes = {
  onfilterText: PropTypes.func,
  onChangeStock: PropTypes.func,
  inStock: PropTypes.bool,
  filterText: PropTypes.func
};

export default SearchBar;
