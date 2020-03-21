import React from 'react';
import { Route } from 'react-router-dom';

import InfoRest from 'component/infoRes';
// import Favorite from 'component/Favorite';
import Menu from 'component/Menu';

import { TabContentHolder } from './style';

const InnerRoute = () => {
  return (
    <TabContentHolder>
      <Route exact path='/' component={Menu} />
      <Route path='/info' component={InfoRest} />
      {/* <Route path='/favorite' component={Favorite} /> */}
    </TabContentHolder>
  );
};

export default InnerRoute;
