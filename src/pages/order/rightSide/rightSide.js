import React from 'react';
import { RestProfileContainer, RightSideHolder } from '../style';
import { Route } from 'react-router-dom';
import TabBar from '../TabBar';
import InnerRoute from '../InnerRoute';
import Menu from 'component/Menu';
const RightSide = React.memo(() => {
  return (
    <RightSideHolder>
      <RestProfileContainer>
        <Route path='/' component={TabBar} />
        <Route exact path='/' component={Menu} />
        <Route path='/:name' component={InnerRoute} />
      </RestProfileContainer>
    </RightSideHolder>
  );
});
export default RightSide;
