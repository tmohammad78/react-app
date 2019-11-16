import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Modal/index';
import Food from './food/index';
import SearchBar from './searchBar/searchBar';
import SubFood from '../subFoodModal/subFood';
import FoodListTitle from './FoodListTitle';

import './style.scss';

const FoodListTable = ({ items }) => {
  //   const originalItems = [...items];
  //   const [foodList, setFoodList] = useState(items);
  const [searchKey, setSearchKey] = useState('');
  const [inStock, setInStock] = useState(false);
  const [subFood, setSubFood] = useState(null);

  useEffect(() => {
    search(searchKey, inStock);
  }, []);

  const search = (stock, list = items) => {
    let newlist = list;
    if (stock) {
      newlist = newlist.filter((x) => x.available);
    }
    // if (query) {
    //   newList = newList.filter(x => x.subFoods.length === 0);
    //   newList = newList.filter(x => x.title.indexOf(query) > -1);
    // } else {
    //   newList = newList.filter(x => x.parent === 0);
    // }
    // setFoodList(newlist);
  };

  const searchHandler = () => {
    search(text, inStock);
    setSearchKey(text);
  };

  const stockHandler = (value) => {
    search(searchKey, value);
    setInStock(value);
  };

  const row = [];
  let lastCategory = null;

  if (items) {
    items.forEach((food) => {
      if (food.categoryTitle !== lastCategory) {
        row.push(<FoodListTitle category={food.categoryTitle} id={food.categoryId} />);
      }
      row.push(<Food food={food} onShowsubFoodModal={(foodItem) => setSubFood(foodItem)} />);
      lastCategory = food.categoryTitle;
    });
  }
  return (
    <div className='food_menu clearfix'>
      <SearchBar
        filterText={searchKey}
        onfilterText={searchHandler}
        inStock={inStock}
        onChangeStock={stockHandler}
      />
      <Modal open={subFood} onClose={() => setSubFood(null)} className='subFoodModal'>
        <SubFood item={subFood} />
      </Modal>
      <div className='food-list'>{row}</div>
    </div>
  );
};

FoodListTable.propTypes = {
  foodList: PropTypes.array,
  addFood: PropTypes.func,
  removeFood: PropTypes.func,
  productToUpdate: PropTypes.object
};

export default FoodListTable;
