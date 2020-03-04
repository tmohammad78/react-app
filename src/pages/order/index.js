import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Cover from 'component/Cover';
import Header from 'component/Header';
import Footer from 'component/Footer';
import Spinner from 'component/Spinner/index.js';
import TabBar from './TabBar';
import InnerRoute from './InnerRoute';
import Menu from 'component/Menu';

import { RestMenuHolder, RightSideHolder, RestProfileContainer } from './style.js';
import RightSide from './rightSide/rightSide';
const Cart = lazy(() => import('component/FloatCart'));

const Order = props => {
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
};

Order.propTypes = {
  match: PropTypes.object
};

export default Order;
