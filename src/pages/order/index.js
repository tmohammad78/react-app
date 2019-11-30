import React, { lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Cover from 'component/Cover';
import Cart from 'component/FloatCart';
import InfoRest from 'component/infoRes';
import { RestMenuHolder, RightSideHolder } from './style.js';
import './style.scss';

const Menu = lazy(() => import('component/Menu'));

const Order = props => {
  const path = props.match.url;

  return (
    <React.Fragment>
      <Cover />
      {/* <div className='rest-menu-holder clearfix'> */}
      <RestMenuHolder>
        <div className='wrapper clearfix '>
          {/* <div className='right-side-holder'> */}
          <RightSideHolder>
            <div className='rest-profile-container'>
              <nav className='menu-tab'>
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
              </nav>
              <div className='tab-content-holder white-box clearfix'>
                <Suspense fallback={() => <div>...loading</div>}>
                  <Switch>
                    <Route exact path={`${path}`} component={Menu} />
                    <Route path={`${path}/info`} component={InfoRest} />
                  </Switch>
                </Suspense>
              </div>
            </div>
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
