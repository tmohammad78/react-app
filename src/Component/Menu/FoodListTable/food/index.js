import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Food = ({ food, addFood, removeFood, onShowsubFoodModal }) => {
  const className = [];
  let removeBtn;
  let subfoodIcon;
  let image = null;

  if (food.img) {
    const src = food.img.replace('#SIZEOFIMAGE#', '80x50');
    const dataSrc = food.img.replace('#SIZEOFIMAGE#', '560x350');
    image = <img src={src} alt='true' data-src={dataSrc} className='lazyload' />;
  }
  if (food.quantity > 0) {
    className.push('active-box');
    removeBtn = (
      <button type='button' className='removeButton' onClick={() => removeFood(food)}>
        <i className='fo fo-minus' />
      </button>
    );
  }
  if (food.subFoods) {
    className.push('has_sub');
    subfoodIcon = <i />;
  }
  const addClicked = () => {
    if (food.subFoods) {
      onShowsubFoodModal(food);
    } else {
      addFood(food, 1);
    }
  };
  return (
    <div className='food-item'>
      <section
        className={className.map(item => {
          return item;
        })}
      >
        <div className='qty-badge transition-all'>
          <span>{food.quantity > 0 ? food.quantity : null}</span>
        </div>
        <figure className='food-img '>
          {image}
          <div className='ingredient'>
            <span>
              <b>{food.ingredient}</b>
            </span>
          </div>
        </figure>
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
              <button type='button' className='addButton' onClick={addClicked}>
                <div className='fo fo-plus' />
              </button>
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
      </section>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.object.isRequired,
  addFood: PropTypes.func.isRequired,
  removeFood: PropTypes.func.isRequired,
  onShowsubFoodModal: PropTypes.func
};

export default Food;
