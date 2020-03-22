import React, { lazy, Suspense } from 'react';

import Cover from 'component/Cover';
import Header from 'component/Header';
import Footer from 'component/Footer';
import Spinner from 'component/Spinner/index.js';
import RightSide from './rightSide/rightSide';

import { RestMenuHolder } from './style.js';

const Cart = lazy(() => import('component/FloatCart'));
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
