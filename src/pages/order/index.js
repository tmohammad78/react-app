import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Menu from '../../component/Menu';
import Cover from '../../component/Cover/index';
import Cart from '../../component/FloatCart/index';
import InfoRest from '../../component/infoRes/index';
import './style.scss';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const path = this.props.match.url;
    return (
      <React.Fragment>
        {/* <Link to='/' className='anchor-Link'>
          home
        </Link> */}
        <Cover />
        <div className='rest-menu-holder clearfix'>
          <div className='wrapper full-style clearfix '>
            <div className='right-side-holder'>
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
                  <Switch>
                    <Route exact path={`${path}`} component={Menu} />
                    <Route path={`${path}/info`} component={InfoRest} />
                  </Switch>
                </div>
              </div>
            </div>
            <Cart />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Order.propTypes = {
  match: PropTypes.object
};

export default Order;
