import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { closeSubFoodModal } from 'services/subFood/action';
import Modal from 'component/Modal';
import Food from './food/index';
import { objectToArray } from 'helper';
import SearchBar from './searchBar/searchBar';
import SubFood from '../subFoodModal/subFood';
import FoodListTitle from './FoodListTitle';
// import ShowContext from './contex';

import './style.scss';

const FoodListTable = ({ items }) => {
  //   const originalItems = [...items];
  const row = [];
  let lastCategory = null;

  const subFood = useSelector((state) => state.subFood);
  const [foodList, setFoodList] = useState(items);
  const [searchKey, setSearchKey] = useState('');
  const [inStock, setInStock] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    search(searchKey, inStock);
  }, []);

  const search = (text, stock, list = items) => {
    let newList = list;
    const result = [];
    let searchIngredient = list;
    if (stock) {
      newList = newList.filter((item) => item.available);
    }
    if (text) {
      //   newList = newList.filter((x) => !x.subFoods);
      newList = newList.filter((item) => item.title.indexOf(text) > -1);
      searchIngredient = searchIngredient.filter((item) => item.ingredient.indexOf(text) > -1);
      //   result.push(newList, searchIngredient);   concat two array in newList  // ES8
      //   console.log(result);
      console.log('before', newList);
      newList.push(searchIngredient);
      console.log('after', newList);
    } else {
      //   newList = newList.filter((item) => item.parent === 0);
    }
    setFoodList(newList);
  };

  const searchHandler = (text) => {
    search(text, inStock);
    setSearchKey(text);
  };

  const stockHandler = (value) => {
    search(searchKey, value);
    setInStock(value);
  };

  if (items) {
    let arr;
    foodList.length > 0 ? (arr = foodList) : (arr = items);
    arr.forEach((food) => {
      if (food.categoryTitle !== lastCategory) {
        row.push(<FoodListTitle category={food.categoryTitle} id={food.categoryId} />);
      }
      row.push(<Food food={food} />);
      lastCategory = food.categoryTitle;
    });
  }

  console.log(subFood);
  return (
    <div className='food_menu clearfix'>
      <SearchBar
        filterText={searchKey}
        onfilterText={searchHandler}
        inStock={inStock}
        onChangeStock={stockHandler}
      />
      {/* <ShowContext.Provider value={{ showSubFood: showSubFood(), subFood: subFood }}> */}
      <Modal
        open={subFood.show}
        onClose={() => dispatch(closeSubFoodModal(true))}
        className='subFoodModal'
      >
        <SubFood itemFood={subFood.food} />
      </Modal>

      <div className='food-list'>{row}</div>
    </div>
  );
};

FoodListTable.propTypes = {
  items: PropTypes.object
};

export default FoodListTable;
