import React from 'react';
import { Route } from 'react-router-dom';

import InfoRest from 'Components/infoRes/index';
// import Favorite from 'component/Favorite';
import Menu from 'Components/Menu/index';

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
