import React from 'react';
import PropTypes from 'prop-types';
import Button  from '../../../../Buttons/Button';

const Details = ({ food, addClicked, removeFood }) => {
  let removeBtn;
  let subfoodIcon;
  if (food.quantity > 0) {
    removeBtn = (
      <Button className='qty-remove' onClick={removeFood}>
        <i className='fo fo-minus' />
      </Button>
    );
  }
  if (food.subFoods) {
    subfoodIcon = <i />;
  }

  return (
    <div className='details-holder'>
      <header>
        <h3>{food.title}</h3>
        <span>
          <small>{food.price ? food.price : ''}</small>
        </span>
      </header>
      {food.available ? (
        <div className='qty-holder'>
          {removeBtn}
          <span style={{ color: '#be901e' }}>{food.quantity > 0 ? food.quantity : ''}</span>
          <Button borderRadius='50' onClick={addClicked}>
            <div className='fo fo-plus' />
          </Button>
          {subfoodIcon}
        </div>
      ) : (
        <div className='checkAvailable'>
          <span className='meal-badge'>
            <span>{food.unavailableText}</span>
          </span>
        </div>
      )}
    </div>
  );
};

Details.propTypes = {
  food: PropTypes.object,
  addClicked: PropTypes.func,
  removeFood: PropTypes.func
};
export default Details;
