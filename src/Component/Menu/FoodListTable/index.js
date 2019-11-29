import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { closeSubFoodModal } from 'services/subFood/action';
import Modal from 'component/Modal';
import Food from './food/index';
import Sort from '../sort';
import SearchBar from './searchBar/searchBar';
import SubFood from '../subFoodModal/subFood';
import FoodListTitle from './FoodListTitle';

import './style.scss';

const sortBy = {
  lowestprice: { field: 'price', asc: true },
  highestprice: { field: 'price', asc: false }
};

const FoodListTable = ({ items }) => {
  const originalItems = [...items];
  const row = [];
  let lastCategory = null;

  const subFood = useSelector(state => state.subFood);
  const [foodList, setFoodList] = useState(items);
  const [searchKey, setSearchKey] = useState('');
  const [inStock, setInStock] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    search(searchKey, inStock);
  }, []);

  const NotFound = () => {
    return <div className='not-found'>نتیجه ای پیدا نشد.</div>;
  };

  const search = (text, stock, list = items) => {
    let newList = list;
    let result = [];
    let searchIngredient = list;
    if (stock) {
      newList = newList.filter(item => item.available);
    }
    if (text) {
      newList = newList.filter(item => item.title.indexOf(text) > -1);
      searchIngredient = searchIngredient.filter(item => item.ingredient.indexOf(text) > -1);
      result = newList.concat(searchIngredient);
    } else {
      newList ? (result = newList) : (result = items);
    }
    setFoodList(result);
  };

  const searchHandler = text => {
    search(text, inStock);
    setSearchKey(text);
  };

  const stockHandler = value => {
    search(searchKey, value);
    setInStock(value);
  };

  const sortHandler = value => {
    let newItem;
    const sortItem = sortBy[value];
    if (sortItem) {
      const index = sortItem.asc ? 1 : -1;
      newItem = originalItems.sort((a, b) => {
        return (
          //        a.catIndex - b.catIndex ||
          //          a.catId - b.catId ||
          a.categoryIndex - b.categoryIndex || (a[sortItem.field] - b[sortItem.field]) * index
        );
      });
    } else {
      newItem = originalItems;
    }
    search(searchKey, inStock, newItem);
  };

  if (foodList.length > 0) {
    foodList.forEach(food => {
      if (food.categoryTitle !== lastCategory) {
        row.push(<FoodListTitle category={food.categoryTitle} id={food.catId} />);
      }
      row.push(<Food food={food} />);
      lastCategory = food.categoryTitle;
    });
  } else {
    row.push(<NotFound />);
  }

  return (
    <div className='food_menu clearfix'>
      <Sort onChange={sortHandler} />
      <SearchBar
        filterText={searchKey}
        onfilterText={searchHandler}
        inStock={inStock}
        onChangeStock={stockHandler}
      />
      <Modal
        show={subFood.show}
        onClose={() => dispatch(closeSubFoodModal(true))}
        className='subFoodModal'
        subFood
      >
        <SubFood subfood={subFood.food} />
      </Modal>

      <div className='food-list'>{row}</div>
    </div>
  );
};

FoodListTable.propTypes = {
  items: PropTypes.object
};

export default FoodListTable;
