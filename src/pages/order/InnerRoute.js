import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { TabContentHolder } from './style';
const InnerRoute = ({ match, location }) => {
  const {
    params: { name }
  } = match;
  const InfoRest = lazy(() => import('component/infoRes'));
  const Favorite = lazy(() => import('component/Favorite'));
  const Menu = lazy(() => import('component/Menu'));
  return (
    <TabContentHolder>
      <Route exact path='/' component={Menu} />
      <Route path='/info' component={InfoRest} />
      <Route path='/favorite' component={Favorite} />
    </TabContentHolder>
  );
};

export default InnerRoute;
