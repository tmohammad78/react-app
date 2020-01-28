import React, { useEffect } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkLogin } from 'services/auth/action';
const PrivateRoute = ({ component: Component, ...props }) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, []);
  return (
    <Route
      {...props}
      render={() => {
        if (auth.token) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/auth'
              }}
            />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;
