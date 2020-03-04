import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Cover from 'component/Cover';
import Header from 'component/Header';
import Footer from 'component/Footer';
import Spinner from 'component/Spinner/index.js';
import RightSide from './rightSide/rightSide';

import { RestMenuHolder } from './style.js';
const Cart = lazy(() => import('component/FloatCart'));

const Order = React.memo(props => {
  return (
    <React.Fragment>
      <Header toggleTheme={props.toggleTheme} />
      <Cover />
      <Suspense fallback={<Spinner />}>
        <RestMenuHolder>
          <div className='wrapper clearfix '>
            <RightSide />
          </div>
          <Cart />
        </RestMenuHolder>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
});

Order.propTypes = {
  match: PropTypes.object
};

export default Order;
