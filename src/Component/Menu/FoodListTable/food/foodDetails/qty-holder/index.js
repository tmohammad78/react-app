import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addFood, removeFood } from 'services/cart/actions';
import { SubFoodModal } from 'services/subFood/action';
import { currency } from 'helper';
import { Button } from 'component/Buttons/Button.js';

import './style.scss';

const QtyHolder = ({ food }) => {
  let removeBtn;
  let subfoodIcon;
  const [width, setWidth] = useState('');
  const dispatch = useDispatch();

  if (food.subFoods) {
    subfoodIcon = (
      <div>
        <i className='fo fo-arrow-left' />
      </div>
    );
  }

  const handleRemove = e => {
    e.preventDefault();

    dispatch(removeFood(food));
    if (!(food.quantity > 0)) {
    }
  };

  const addClicked = () => {
    if (food.subFoods.length > 0) {
      dispatch(SubFoodModal(food));
    } else {
    //   debugger;
      dispatch(addFood(food, 1));
    }
  };

  const handleClick = e => {
    e.preventDefault();
    addClicked();
    // setWidth('show-detail');
  };

  if (food.quantity > 0) {
    removeBtn = (
      <Button bgcolor='transparent' borderRadius='50' ptb='5' prl='6' onClick={handleRemove}>
        <i className='fo fo-minus' />
      </Button>
    );
  }
  return food.available ? (
    <div className={`qty-holder ${width}`}>
      <div className='anc-box'>
        {removeBtn}
        {food.quantity ? (
          <span style={{ color: 'white' }}>{currency(food.quantity, false)}</span>
        ) : null}
        <Button bgcolor='transparent' borderRadius='50' ptb='5' prl='6' onClick={handleClick}>
          <i className='fo fo-plus' />
        </Button>
      </div>
      {subfoodIcon}
    </div>
  ) : (
    <div className='checkAvailable'>
      <span className='meal-badge'>
        <span>{food.unavailableText}</span>
      </span>
    </div>
  );
};

export default QtyHolder;
