import React, { FunctionComponent, lazy, Suspense } from 'react';

import Cover from '../../Components/Cover/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import Spinner from '../../Components/Spinner/index';
import RightSide from './rightSide/rightSide';

import { RestMenuHolder } from './style';

const Cart = lazy(() => import('../../Components/FloatCart/index'));

const Order: FunctionComponent = React.memo(() => {
	return (
		<React.Fragment>
			<Header />
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
