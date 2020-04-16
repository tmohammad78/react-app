import React from 'react';
interface IProps {
	category: string | undefined,
	id: string | undefined
}
const FoodListTitle = ({ category, id }: IProps) => {
	return (
		<h2 id={id}>
			<span>{category}</span>
		</h2>
	);
};

export default FoodListTitle;
