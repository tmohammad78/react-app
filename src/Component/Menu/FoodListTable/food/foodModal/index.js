import React from 'react';
import FoodImge from '../foodDetails/foodImage';
import Tittle from '../foodDetails/Tittle';
import Ingredient from '../foodDetails/ingredient';
import QtyHolder from '../foodDetails/qty-holder';
import Price from '../foodDetails/price';
import './style.scss';

const DetailModal = ({ defaultDetail: items, food }) => {
  
  return (
    <div className='modal-food'>
      <FoodImge image={items.img} />
      <Tittle tittle={items.title} />
      <Ingredient ingredient={items.ingredient} checkTruncate={false} />
      <div className='block'>
        <Price price={items.price} />
        <QtyHolder food={food} />
      </div>
    </div>
  );
};
export default DetailModal;
