import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
const Category = () => {
	const item = useSelector(state => state.menu.categoryList);
  return (
    <div className='parent'>
      <div className='categories'>
        <div className='owl-item'>
          <Carousel isRTL itemsToShow={5} pagination={false}>
            {item.map(food => {
              return (
                <div className='i-w'>
                  <i className={`ic-c c-${food.catLogo}`} />
                  <p>{food.catTitle}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  item: PropTypes.object.isRequired
};

export default Category;
