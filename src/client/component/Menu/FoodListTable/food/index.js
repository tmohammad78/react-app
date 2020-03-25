import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import FoodDetails from './details-holder/index';
import DetailModal from './foodModal';
import Modal from 'component/Modal';
import FoodImage from './foodDetails/foodImage';
import FoodBadge from './foodDetails/FoodBadge/index';
import Portal from 'component/Portal';
import { SubFoodModal } from 'services/subFood/action';

import { FoodItem } from './style.js';

const Food = ({ food }) => {
  const className = [];
  const newItem = useSelector(state => state.menu.foodListItem[food.id]);
  const dispatch = useDispatch();
  const [showModal, SetShowModal] = useState(false);

  if (food.quantity > 0) {
    className.push('active-box');
  }

  const handleshowModal = useCallback(() => {
    if (food.subFoods.length > 0) {
      dispatch(SubFoodModal(food));
    } else {
      SetShowModal(() => !showModal);
    }
  }, [showModal, food.subFoods]);

  const renderImage = useMemo(() => {
    return (
      <div onClick={handleshowModal}>
        <FoodImage image={food.img} />
      </div>
    );
  }, [FoodImage]);

  return (
    <FoodItem>
      <section
        className={
          className.map(item => {
            return item;
          }) || ''
        }
      >
        <FoodBadge quantity={newItem.quantity} />
        {renderImage}
        <FoodDetails food={newItem} />

        {showModal ? (
          <Portal>
            <Modal show={showModal} onClose={handleshowModal}>
              <DetailModal defaultDetail={food} food={newItem} />
            </Modal>
          </Portal>
        ) : null}
      </section>
    </FoodItem>
  );
};

Food.propTypes = {
  food: PropTypes.object.isRequired
};

export default Food;
