import Spinner from '../Components/Spinner';
import RequireAuth from '../Hoc/auth';
import loadable from '@loadable/component'
import AuthPage from '../Pages/auth/index';
import MainAuth from '../Pages/auth/main/index';
import Register from '../Components/Register/index';

// const AuthPage = loadable(() => import('../Pages/auth/index'), {
// 	fallback: <div>...loadin</div>
// });
// const Register = loadable(() => import('../Components/Register/index'), {
// 	fallback: <div>...loadin</div>
// });
// const MainAuth = loadable(() => import('../Pages/auth/main/index'), {
// 	fallback: <div>...loading</div>
// });
// const Order = loadable(() => import('../Pages/order'), {
// 	fallback: <div>...loadin</div>
// });
// const Menu = loadable(() => import('../Components/Menu/index'), {
// 	fallback: <div>...loadin</div>
// });
// const InnerRoute = loadable(() => import('../Pages/order/InnerRoute'), {
// 	fallback: <div>...loadin</div>
// });
// const TabBar = loadable(() => import('../Pages/order/tabBar/index'), {
// 	fallback: <div>...loadin</div>
// });
// const InfoRest = loadable(() => import('../Components/infoRes/index'), {
// 	fallback: <div>...loadin</div>
// });
// const Favorite = loadable(() => import('../Components/Favorite/index'), {
// 	fallback: <div>...loadin</div>
// });

const Routes: any | undefined = [
	// {
	// 	component: RequireAuth(Order),
	// 	path: '/',
	// 	exact: true,
	// 	routes: [
	// 		{
	// 			component: TabBar,
	// 			path: '/'
	// 		},
	// 		{
	// 			component: Menu,
	// 			path: '/',
	// 			exact: true
	// 		},
	// 		{
	// 			component: InnerRoute,
	// 			path: '/:name',
	// 			routes: [
	// 				{
	// 					path: '/',
	// 					component: Menu,
	// 					exact: true
	// 				},
	// 				{
	// 					path: '/info',
	// 					component: InfoRest
	// 				},
	// 				{
	// 					path: '/favorite',
	// 					component: Favorite
	// 				}

	// 			]
	// 		}
	// 	]
	// },
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