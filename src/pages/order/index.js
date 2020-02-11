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
              {/* <nav className='menu-tab'> */}
              <MenuTab>
                <NavLink to={`${props.match.url}`} activeClassName='active'>
                  منوی غذا
                </NavLink>
                <NavLink to='/info' activeClassName='active'>
                  اطلاعات رستوران
                </NavLink>
                <NavLink to='/favorite' activeClassName='active'>
                  علاقه مندی
                </NavLink>
              </MenuTab>
              {/* <div className='tab-content-holder white-box clearfix'> */}
              <TabContentHolder>
                <Suspense fallback={() => <div>...loading</div>}>
                  <Switch>
                    <Route exact path={`${props.match.path}`} component={Menu} />
                    <Route path='/info' component={InfoRest} />
                    <Route path='/favorite' component={Favorite} />
                  </Switch>
                </Suspense>
              </TabContentHolder>
              {/* </div> */}
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
