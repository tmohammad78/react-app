import { FunctionComponent } from 'react';
// @ts-ignore
import { truncate } from '../../../../../../Helper/index';
import './style.scss';


interface IProps {
	ingredient: string,
	checkTruncate?: boolean
}

const Ingredient: FunctionComponent<IProps> = ({ ingredient, checkTruncate = true }) => {
	return ingredient ? (
		<div className='ingredient'>{checkTruncate ? truncate(ingredient, 8) : ingredient}</div>
	) : null;
};

export default Ingredient;
