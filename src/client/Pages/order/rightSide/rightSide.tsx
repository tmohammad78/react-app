import React from 'react';
import { Route } from 'react-router-dom';
import { RestProfileContainer, RightSideHolder } from '../style';

const RightSide: React.SFC = ({ route }) => {
  console.log('rightside', route);
  return (
    <RightSideHolder>
      <RestProfileContainer>
        {route.map((item: any) => {
          console.log(item);
          return (
            <Route
              exact={item.exact ? item.exact : false}
              path={item.path}
              component={item.component}
            />
          );
        })}
      </RestProfileContainer>
    </RightSideHolder>
  );
};
export default RightSide;
