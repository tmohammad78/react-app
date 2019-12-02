import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from 'component/Input';
import './style.scss';

const SearchBar = ({ filterText, onfilterText, onChangeStock, inStock }) => {
  const handleTextChange = e => {
    onfilterText(e.target.value);
  };

  const handleInStockChange = e => {
    onChangeStock(e.target.checked);
  };

  return (
    <Fragment>
      <div className='filter-box clearfix'>
        {/* <div className='filter-search'> */}
        {/* <input type='text' value={filterText} onChange={handleTextChange} />
          <span className='placeholder'>جستجوی غذا</span>
          <span className='search-icon'>
            <i className='fo fo-search' />
          </span> */}
        <Input icon='search' value={filterText} onChange={handleTextChange} label='جستجوی غذا' />
        {/* </div> */}
        <div className='filter-check'>
          <label htmlFor='checkbox' className='custom-checkbox'>
            <input
              type='checkbox'
              className='styled_checkbox'
              checked={inStock}
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
