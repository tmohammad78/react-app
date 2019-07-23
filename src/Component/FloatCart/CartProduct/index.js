import React from 'react';
import PropTypes from 'prop-types';

const CartProduct = ({ product, removeFood, addFood }) => {
  return (
    <div className='item'>
      <button type='button' className='anc anc-rmv' onClick={() => removeFood(product, true)}>
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
              className='btn addButton'
              style={{ position: 'absolute', left: '0' }}
              onClick={() => addFood(product, 1)}
            >
              +
            </button>
            <span>{product.quantity}</span>
            <button
              type='button'
              className='btn btn-transparent removeButton'
              onClick={() => removeFood(product)}
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
