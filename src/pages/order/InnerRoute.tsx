import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import InfoRest from '../../Components/infoRes/index';
import Favorite from '../../Components/Favorite/index';
import Menu from '../../Components/Menu/index';

import { TabContentHolder } from './style';

const InnerRoute = () => {
	return (
		<TabContentHolder>
			<Route exact path='/' component={Menu} />
			<Route path='/info' component={withRouter(InfoRest)} />
			<Route path='/favorite' component={withRouter(Favorite)} />
		</TabContentHolder>
	);
};

export default InnerRoute;
