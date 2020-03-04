import React, { lazy } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

const Test2 = ({ match, location }) => {
  const {
    params: { name }
  } = match;
  const InfoRest = lazy(() => import('component/infoRes'));
  const Favorite = lazy(() => import('component/Favorite'));
  const Menu = lazy(() => import('component/Menu'));
  return (
    <div>
      <Route exact path='/' component={Menu} />
      <Route path='/info' component={InfoRest} />
      <Route path='/favorite' component={Favorite} />
    </div>
  );
};

export default Test2;
