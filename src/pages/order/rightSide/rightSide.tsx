import React from 'react';
import { Route } from 'react-router-dom';

import TabBar from '../TabBar';
import InnerRoute from '../InnerRoute';
import Menu from '../../../Components/Menu/index';

import { RestProfileContainer, RightSideHolder } from '../style';

const RightSide: React.SFC = React.memo(() => {
	return (
		<RightSideHolder>
			<RestProfileContainer>
				<Route path='/' component={TabBar} />
				<Route exact path='/' component={Menu} />
				<Route path='/:name' component={InnerRoute} />
			</RestProfileContainer>
		</RightSideHolder>
	);
});
export default RightSide;
