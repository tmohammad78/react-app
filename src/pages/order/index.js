import React, { lazy, Suspense } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Cover from 'component/Cover';
import Cart from 'component/FloatCart';
import InfoRest from 'component/infoRes';

import {
  RestMenuHolder,
  RightSideHolder,
  TabContentHolder,
  RestProfileContainer,
  MenuTab
} from './style.js';
import Spinner from 'component/Spinner/index.js';

const Favorite = lazy(() => import('component/Favorite'));
const Menu = lazy(() => import('component/Menu'));

const Order = props => {
  return (
    <React.Fragment>
      <Cover />
      <RestMenuHolder>
        <div className='wrapper clearfix '>
          <RightSideHolder>
            <RestProfileContainer>
              <MenuTab>
                <NavLink to={`${props.match.url}`}  >
                  منوی غذا
                </NavLink>
                <NavLink to='/info' activeClassName='active'>
                  اطلاعات رستوران
                </NavLink>
                <NavLink to='/favorite' activeClassName='active'>
                  علاقه مندی
                </NavLink>
              </MenuTab>
              <TabContentHolder>
                <Suspense fallback={<Spinner />}>
                  <Switch>
                    <Route exact path={`${props.match.path}`} component={Menu} />
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
    </React.Fragment>
  );
};

Order.propTypes = {
  match: PropTypes.object
};

export default Order;
