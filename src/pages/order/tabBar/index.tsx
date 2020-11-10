import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuTab } from '../style';


const TabBar: FunctionComponent<any> = () => {
	return (
		<MenuTab>
			<NavLink to='/'>منوی غذا</NavLink>
			<NavLink to='/info' activeClassName='active'>
				اطلاعات رستوران
			</NavLink>
			<NavLink to='/favorite' activeClassName='active'>
				علاقه مندی
			</NavLink>
		</MenuTab>
	);
};

export default TabBar;
