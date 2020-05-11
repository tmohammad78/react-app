import React from 'react';
import Loadable from 'react-loadable';
import Spinner from '../Components/Spinner';
import RequireAuth from '../Hoc/auth';

const AuthPage = Loadable({
	loader: () => import('../Pages/auth/index'),
	loading: () => <Spinner />
});
const Register = Loadable({
	loader: () => import('../Components/Register/index'),
	loading: () => <Spinner />
});
const MainAuth = Loadable({
	loader: () => import('../Pages/auth/main/index'),
	loading: () => <Spinner />
});
const Order = Loadable({
	loader: () => import('../Pages/order'),
	loading: () => <Spinner />
});
const Menu = Loadable({
	loader: () => import('../Components/Menu/index'),
	loading: () => <Spinner />
});
const InnerRoute = Loadable({
	loader: () => import('../Pages/order/InnerRoute'),
	loading: () => <Spinner />
});
const TabBar = Loadable({
	loader: () => import('../Pages/order/tabBar/index'),
	loading: () => <Spinner />
});
const InfoRest = Loadable({
	loader: () => import('../Components/infoRes/index'),
	loading: () => <Spinner />
});
const Favorite = Loadable({
	loader: () => import('../Components/Favorite/index'),
	loading: () => <Spinner />
});

const Routes: any | undefined = [
	{
		component: RequireAuth(Order),
		path: '/',
		exact: true,
		routes: [
			{
				component: TabBar,
				path: '/'
			},
			{
				component: Menu,
				path: '/',
				exact: true
			},
			{
				component: InnerRoute,
				path: '/:name',
				routes: [
					{
						path: '/',
						component: Menu,
						exact: true
					},
					{
						path: '/info',
						component: InfoRest
					},
					{
						path: '/favorite',
						component: Favorite
					}

				]
			}
		]
	},
	{
		component: AuthPage,
		path: '/auth',
		routes: [
			{
				component: MainAuth,
				path: '/auth',
				exact: true
			},
			{
				component: Register,
				path: '/auth/test',
				exact: true
			}
		]
	}
]

export default Routes;