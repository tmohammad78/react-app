import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import InfoRest from '../../Components/infoRes/index';
import Favorite from '../../Components/Favorite/index';
import Menu from '../../Components/Menu/index';

import { TabContentHolder } from './style';
import { renderRoutes } from 'react-router-config';

const InnerRoute = ({ routes }) => {
	console.log('inner route ', routes)
	return (
		<TabContentHolder>
			{/* <Route exact path='/' component={Menu} />
			<Route path='/info' component={withRouter(InfoRest)} />
			<Route path='/favorite' component={withRouter(Favorite)} /> */}
			{renderRoutes(routes)}
		</TabContentHolder>
	);
};

export default InnerRoute;
