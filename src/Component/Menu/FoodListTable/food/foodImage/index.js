import React from 'react';
import PropTypes from 'prop-types';

const FoodImage = ({ food }) => {
  let image = null;
  if (food.img) {
    const src = food.img.replace('#SIZEOFIMAGE#', '80x50');
    const dataSrc = food.img.replace('#SIZEOFIMAGE#', '560x350');
    image = <img src={src} alt='true' data-src={dataSrc} className='lazyload' />;
  }
  return (
    <figure className='food-img '>
      {image}
      <div className='ingredient'>
        <span>
          <b>{food.ingredient}</b>
        </span>
      </div>
    </figure>
  );
};
FoodImage.propTypes = {
  food: PropTypes.object
};

export default FoodImage;
