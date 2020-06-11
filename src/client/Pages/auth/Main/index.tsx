import React from 'react';
// import { Button } from '../../../Components/Buttons/Button';
import { NavLink, RouteComponentProps, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { skipAuth } from '../../../Redux/auth/action';

type IParams = { url: string };
interface IProps {
	callBackChangeState: () => void;
	handleSkipAuth?: () => void,
	match?: RouteComponentProps<IParams>
}

const MainAuth: React.SFC<IProps> = ({ callBackChangeState }: IProps) => {
	// const location = useLocation();
	// const dispatch = useDispatch();
	// const handleSkipAuth = () => {
	// 	dispatch(skipAuth());
	// };

	return (
		<div>
			djhfh
		</div>

		// <div className='inner_content'>
		// 	<div className='title'>
		// 		<span>انتخاب کن و سفارش بده..!</span>
		// 	</div>
		// 	<div className='registerButton'>
		// 		<div className='registerbtn'>
		// 			<NavLink to={`/test`}>
		// 				{/* ${props.match.url} */}
		// 				<Button ptb='16' prl='100' onClick={callBackChangeState}>
		// 					ثبت نام
		//     			</Button>
		// 			</NavLink>
		// 		</div>
		// 		<div></div>
		// 		<div className='registerbtn'>
		// 			{/* ${location.state.pathname} */}
		// 			<NavLink to={`/`}>
		// 				<Button
		// 					ptb='13'
		// 					prl='100'
		// 					bgcolor='transparent'
		// 					borderSize='2'
		// 					onClick={handleSkipAuth}
		// 				>
		// 					فعلا نه
		//     			</Button>
		// 			</NavLink>
		// 		</div>
		// 	</div>
		// </div>
	);
};
export default MainAuth;
