import React, { lazy, Suspense } from 'react';

import Cover from 'Components/Cover/index';
import Header from 'Components/Header/index';
import Footer from 'Components/Footer/index';
import Spinner from 'Components/Spinner/index.js';
import RightSide from './rightSide/rightSide';

import { RestMenuHolder } from './style';

const Cart = lazy(() => import('Components/FloatCart'));
interface Props {
	toggleTheme: string | boolean | (() => void)
}

const Order: React.SFC<Props> = React.memo(({ toggleTheme }) => {
	return (
		<React.Fragment>
			<Header toggleTheme={toggleTheme} />
			<Cover />
			<Suspense fallback={<Spinner />}>
				<RestMenuHolder>
					<div className='wrapper clearfix '>
						<RightSide />
					</div>
					<Cart />
				</RestMenuHolder>
			</Suspense>
			<Footer />
		</React.Fragment>
	);
});


export default Order;
