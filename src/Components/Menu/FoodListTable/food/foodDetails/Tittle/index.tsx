import React from 'react';
import './style.scss';
interface IProps {
	tittle: string
}
const Tittle: React.SFC<IProps> = ({ tittle }) => {
	return (
		<header className='tittle-food'>
			<h3 className='tittle'>{tittle}</h3>
		</header>
	);
};
export default Tittle;
