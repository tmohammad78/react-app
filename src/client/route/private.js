import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...props }) => {
  const auth = useSelector(state => state.auth);
  return (
    <Route
      {...props}
      render={({ location }) => {
        if (auth.logged || auth.logged == 'skiped') {
          return <Component {...props} toggleTheme={props.toggleTheme} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/auth',
                state: {
                  from: location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;
