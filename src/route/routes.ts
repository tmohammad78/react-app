import AuthPage from '../pages/auth/index';
import Register from '../Components/Register/index';
import MainAuth from '../pages/auth/Main/index';
import Order from '../pages/order/index';
import Menu from '../Components/Menu/index';
import InnerRoute from '../pages/order/InnerRoute';
import TabBar from '../pages/order/tabBar/index';
import InfoRest from '../Components/infoRes/index';
import Favorite from '../Components/Favorite/index';
import { ComponentClass, FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

class InnerRoutes {
}

interface InnerRoutes {
	component: FunctionComponent<any> | ComponentClass<any>,
	path: string,
	exact?: boolean
	routes?: InnerRoutes[]
}

interface IRoutes {
	component: FunctionComponent<any> | ComponentClass<any>,
	path: string,
	exact?: boolean,
	routes?: InnerRoutes[]
}

const Routes: IRoutes[] = [
	{
		component: Order,
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
	// {
	// 	component: AuthPage,
	// 	path: '/auth',
	// 	routes: [
	// 		{
	// 			component: MainAuth,
	// 			path: '/auth',
	// 			exact: true
	// 		},
	// 		{
	// 			component: Register,
	// 			path: '/auth/test',
	// 			exact: true
	// 		}
	// 	]
	// }
];

export default Routes;
