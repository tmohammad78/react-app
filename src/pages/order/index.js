import React, { lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
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

const Menu = lazy(() => import('component/Menu'));

const Order = props => {
  const path = props.match.url;

  return (
    <React.Fragment>
      <Cover />
      <RestMenuHolder>
        <div className='wrapper clearfix '>
          <RightSideHolder>
            <RestProfileContainer>
              {/* <nav className='menu-tab'> */}
              <MenuTab>
                <NavLink
                  exact
                  to={{
                    pathname: `${path}`
                  }}
                  activeClassName='active'
                >
                  منوی غذا
                </NavLink>
                <NavLink
                  to={{
                    pathname: `${path}/info`
                  }}
                >
                  اطلاعات رستوران
                </NavLink>
              </MenuTab>
              {/* <div className='tab-content-holder white-box clearfix'> */}
              <TabContentHolder>
                <Suspense fallback={() => <div>...loading</div>}>
                  <Switch>
                    <Route exact path={`${path}`} component={Menu} />
                    <Route path={`${path}/info`} component={InfoRest} />
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
