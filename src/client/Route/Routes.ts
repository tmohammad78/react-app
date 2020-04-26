
import Spinner from '../Components/Spinner';
import loadable from '@loadable/component'

const AuthPage = loadable(() => import('../Pages/auth/index'))

const RequireAuth = loadable(() => import('../Hoc/auth'))

const Register = loadable(() => import('../Components/Register/index'))

const MainAuth = loadable(() => import('../Pages/auth/main/index'))

const Order = loadable(() => import('../Pages/order'))

const Menu = loadable(() => import('../Components/Menu/index'))

const InnerRoute = loadable(() => import('../Pages/order/InnerRoute'))

const TabBar = loadable(() => import('../Pages/order/tabBar/index'))

const InfoRest = loadable(() => import('../Components/infoRes/index'))

const Favorite = loadable(() => import('../Components/Favorite/index'))




export default [
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