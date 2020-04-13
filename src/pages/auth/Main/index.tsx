import React from 'react';
import { Button } from '../../../Components/Buttons/Button';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';

interface IProps {
	callBackChangeState: () => void;
	handleSkipAuth: () => void
}
const MainAuth: React.SFC<IProps> = (props) => {
	const location = useLocation();
	return (
		<div className='inner_content'>
			<div className='title'>
				<span>انتخاب کن و سفارش بده..!</span>
			</div>
			<div className='registerButton'>
				<div className='registerbtn'>
					{/* <NavLink to={`${props.match.url}/test`}> */}
					<Button ptb='16' prl='100' onClick={props.callBackChangeState}>
						ثبت نام
            </Button>
					{/* </NavLink> */}
				</div>
				<div></div>
				<div className='registerbtn'>
					<NavLink to={`${location.state}`}>
						<Button
							ptb='13'
							prl='100'
							bgcolor='transparent'
							borderSize='2'
							onClick={props.handleSkipAuth}
						>
							فعلا نه
            </Button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};
export default MainAuth;
