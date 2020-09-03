import React from 'react';
// import Spinner from '../Components/Spinner';
import RequireAuth from '../Hoc/auth';
import baseLoadable from '@loadable/component';
function loadable(func: any) {
  return baseLoadable(func, { fallback: <div>...loading</div> });
}

// const AuthPage = loadable(() => import('../Pages/auth/index'));

// const Register = loadable(() => import('../Components/Register/index'));
// const MainAuth = loadable(() => import('../Pages/auth/main/index'));
// const Order = loadable(() => import('../Pages/order'));
// const Menu = loadable(() => import('../Components/Menu/index'));
// const InnerRoute = loadable(() => import('../Pages/order/InnerRoute'));
// const TabBar = loadable(() => import('../Pages/order/tabBar/index'));
// const InfoRest = loadable(() => import('../Components/infoRes/index'));
// const Favorite = loadable(() => import('../Components/Favorite/index'));

import AuthPage from '../Pages/auth/index';

import Register from '../Components/Register/index';
import MainAuth from '../Pages/auth/main/index';
import Order from '../Pages/order';
import Menu from '../Components/Menu/index';
import InnerRoute from '../Pages/order/InnerRoute';
import TabBar from '../Pages/order/tabBar/index';
import InfoRest from '../Components/infoRes/index';
import Favorite from '../Components/Favorite/index';

const Routes: any | undefined = [
  {
    component: Order,
    path: '/',
    exact: true,
    routes: [
      {
        component: TabBar,
        path: '/',
      },
      {
        component: Menu,
        path: '/',
        exact: true,
      },
      {
        component: InnerRoute,
        path: '/:name',
        routes: [
          {
            path: '/',
            component: Menu,
            exact: true,
          },
          {
            path: '/info',
            component: InfoRest,
          },
          {
            path: '/favorite',
            component: Favorite,
          },
        ],
      },
    ],
  },
  {
    component: AuthPage,
    path: '/auth',
    routes: [
      {
        component: MainAuth,
        path: '/auth',
        exact: true,
      },
      {
        component: Register,
        path: '/auth/test',
        exact: true,
      },
    ],
  },
];

export default Routes;
