import React from 'react';
import { truncate } from '../../../../../../Helper/index';
import './style.scss';
interface IProps {
	ingredient: string,
	checkTruncate?: boolean
}
const Ingredient: React.SFC<IProps> = ({ ingredient, checkTruncate = true }) => {
	return ingredient ? (
		<div className='ingredient'>{checkTruncate ? truncate(ingredient, 8) : ingredient}</div>
	) : null;
};

export default Ingredient;
