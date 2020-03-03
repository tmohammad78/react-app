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
                <MenuTab>
                  <NavLink to={`/`}>منوی غذا</NavLink>
                  <NavLink to={`/info`} activeClassName='active'>
                    اطلاعات رستوران
                  </NavLink>
                  <NavLink to='/favorite' activeClassName='active'>
                    علاقه مندی
                  </NavLink>
                </MenuTab>
                <TabContentHolder>
                  <Suspense fallback={<Spinner />}>
                    <Switch>
                      <Route exact path={`/`} component={Menu} />
                      <Route path='/info' component={InfoRest} />
                      <Route path='/favorite' component={Favorite} />
                    </Switch>
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
