import React from 'react';
import { Button } from '../../../Components/Buttons/Button';
import { NavLink, useLocation, RouteComponentProps, useRouteMatch } from 'react-router-dom';

type IParams = { url: string };
interface IProps {
	callBackChangeState: () => void;
	handleSkipAuth: () => void,
	match: RouteComponentProps<IParams>
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
					<NavLink to={`${props.match.url}/test`}>
						<Button ptb='16' prl='100' onClick={props.callBackChangeState}>
							ثبت نام
            			</Button>
					</NavLink>
				</div>
				<div></div>
				<div className='registerbtn'>
					<NavLink to={`${location.state.pathname}`}>
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
