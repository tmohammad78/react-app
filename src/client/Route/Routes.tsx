import React from 'react';
import Loadable from 'react-loadable';
import Spinner from '../Components/Spinner';
import RequireAuth from '../Hoc/auth';

const AuthPage = Loadable({
	loader: () => import('../Pages/auth/index'),
	loading: () => <div>...loadin</div>
});
const Register = Loadable({
	loader: () => import('../Components/Register/index'),
	loading: () => <div>...loadin</div>
});
const MainAuth = Loadable({
	loader: () => import('../Pages/auth/main/index'),
	loading: () => <div>...loadin</div>
});
const Order = Loadable({
	loader: () => import('../Pages/order'),
	loading: () => <div>...loadin</div>
});
const Menu = Loadable({
	loader: () => import('../Components/Menu/index'),
	loading: () => <div>...loadin</div>
});
const InnerRoute = Loadable({
	loader: () => import('../Pages/order/InnerRoute'),
	loading: () => <div>...loadin</div>
});
const TabBar = Loadable({
	loader: () => import('../Pages/order/tabBar/index'),
	loading: () => <div>...loadin</div>
});
const InfoRest = Loadable({
	loader: () => import('../Components/infoRes/index'),
	loading: () => <div>...loadin</div>
});
const Favorite = Loadable({
	loader: () => import('../Components/Favorite/index'),
	loading: () => <div>...loadin</div>
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