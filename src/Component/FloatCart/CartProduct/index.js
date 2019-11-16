import React from 'react';
import { useDispatch } from 'react-redux';
import { addFood, removeFood } from '../../../services/cart/actions';
import PropTypes from 'prop-types';
import './style.scss';

const CartProduct = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  return (
    <div className='item'>
      <button
        type='button'
        className='anc anc-rmv'
        onClick={() => dispatch(removeFood(product, true))}
      >
        x
      </button>
      <div className='item-holder'>
        <aside>
          <h3>
            {product.title}
            <small>{product.price}</small>
          </h3>
        </aside>
        <div className='qty-holder'>
          <div className='food-qty'>
            <button
              type='button'
              className='addButton'
              style={{ position: 'absolute', left: '0' }}
              onClick={() => dispatch(addFood(product, 1))}
            >
              +
            </button>
            <span>{product.quantity}</span>
            <button
              type='button'
              className='removeButton'
              onClick={() => dispatch(removeFood(product))}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeFood: PropTypes.func.isRequired,
  addFood: PropTypes.func.isRequired
};

export default CartProduct;
