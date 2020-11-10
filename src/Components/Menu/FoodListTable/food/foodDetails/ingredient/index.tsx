import React, { FunctionComponent } from 'react';
import { truncate } from '../../../../../../helper';
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
