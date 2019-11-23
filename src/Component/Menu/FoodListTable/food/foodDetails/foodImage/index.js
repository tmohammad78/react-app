import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FoodImage = ({ image }) => {
  let imageData = null;
  if (image) {
    const src = image.replace('#SIZEOFIMAGE#', '80x50');
    const dataSrc = image.replace('#SIZEOFIMAGE#', '560x350');
    imageData = <img src={src} alt='true' data-src={dataSrc} className='lazyload' />;
  }
  return <figure className='image-food' >{imageData}</figure>;
};
FoodImage.propTypes = {
  image: PropTypes.string
};

export default FoodImage;
