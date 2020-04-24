import AuthPage from '../Pages/auth/index';
import RequireAuth from '../Hoc/auth';
import Register from '../Components/Register/index';
import MainAuth from '../Pages/auth/main/index';
import Order from '../Pages/order';
import Menu from '../Components/Menu/index';
import InnerRoute from '../Pages/order/InnerRoute';
import TabBar from '../Pages/order/tabBar/index';

import InfoRest from '../Components/infoRes/index';
import Favorite from '../Components/Favorite/index';
// import Menu from '../Components/Menu/index';


export default [
	{
		component: RequireAuth(Order),
		path: '/',
		exact: true,
		// routes: [
		// 	{
		// 		component: TabBar,
		// 		path: '/'
		// 	},
		// 	{
		// 		component: Menu,
		// 		path: '/',
		// 		exact: true
		// 	},
		// 	{
		// 		component: InnerRoute,
		// 		path: '/:name',
		// 		routes: [
		// 			{
		// 				path: '/',
		// 				component: Menu,
		// 				exact: true
		// 			},
		// 			{
		// 				path: '/info',
		// 				component: InfoRest
		// 			},
		// 			{
		// 				path: '/favorite',
		// 				component: Favorite
		// 			}

		// 		]
		// 	}
		// ]
	},
	{
		component: AuthPage,
		path: '/auth',
		// routes: [
		// 	{
		// 		component: MainAuth,
		// 		path: '/auth',
		// 		exact: true
		// 	},
		// 	{
		// 		component: Register,
		// 		path: '/auth/test',
		// 		exact: true
		// 	}
		// ]
	}
]