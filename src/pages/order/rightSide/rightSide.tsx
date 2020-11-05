import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TabBar from '../tabBar';
import InnerRoute from '../InnerRoute';
import Menu from '../../../Components/Menu/index';

import { RestProfileContainer, RightSideHolder } from '../style';

const RightSide: React.SFC = () => {
	return (
		<RightSideHolder>
			<RestProfileContainer>
				<Route path='/' component={TabBar} />
				<Route exact={true} path='/' component={Menu} />
				<Route path='/:name' component={InnerRoute} />
			</RestProfileContainer>
		</RightSideHolder>
	);
};
export default RightSide;
