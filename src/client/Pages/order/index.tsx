import React, { useState } from 'react';

import Cover from '../../Components/Cover/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import RightSide from './rightSide/rightSide';
import { ThemeProvider } from 'styled-components';
import { RestMenuHolder } from './style';
import darkTheme from '../../Theme/dark';
import lightTheme from '../../Theme/light';
import Cart from '../../Components/FloatCart';

interface Props {
	toggleTheme: string | boolean | (() => void)
}

const Order: React.SFC<Props> = (props) => {
	console.log(props);
	const stored = localStorage.getItem('isDarkMode');
	const [isDarkMode, setIsDarkMode] = useState(
		stored === 'true' ? true : false
	);
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		localStorage.setItem('isDarkMode', !isDarkMode);
	};
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<Header toggleTheme={toggleTheme} />
			<Cover />
			<RestMenuHolder>
				<div className='wrapper clearfix '>
					{/* <RightSide route={props.route} /> */}
				</div>
				<Cart />
			</RestMenuHolder>
			<Footer />
		</ThemeProvider>
	);
};


export default Order;
