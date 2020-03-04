import React, { lazy, Suspense, useMemo } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Cover from 'component/Cover';
import Header from 'component/Header';
import Footer from 'component/Footer';
import Spinner from 'component/Spinner/index.js';

import {
  RestMenuHolder,
  RightSideHolder,
  TabContentHolder,
  RestProfileContainer,
  MenuTab
} from './style.js';

import Test from './test.js';
import Test2 from './test2.js';

const Cart = lazy(() => import('component/FloatCart'));
const InfoRest = lazy(() => import('component/infoRes'));
const Favorite = lazy(() => import('component/Favorite'));
const Menu = lazy(() => import('component/Menu'));
// const Cover = lazy(() => import('component/Cover'));
const Order = props => {
  const renderCover = useMemo(() => {
    return <Cover />;
  }, [Cover]);
  console.log(props);
  return (
    <React.Fragment>
      <Header toggleTheme={props.toggleTheme} />
      {renderCover}
      <Suspense fallback={<Spinner />}>
        <RestMenuHolder>
          <div className='wrapper clearfix '>
            <RightSideHolder>
              <RestProfileContainer>
                <TabContentHolder>
                  <Suspense fallback={<Spinner />}>

                    <Route path='/' component={Test} />
                    <Route exact path='/' component={Menu} />
                    <Route path='/:name' component={Test2} />
                    {/* <Route path='/favorite' component={Favorite} /> */}
                    {/* </Switch> */}
                  </Suspense>
                </TabContentHolder>
              </RestProfileContainer>
            </RightSideHolder>
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
