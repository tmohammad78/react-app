import React from 'react';
interface IProps {
	category: string,
	id: string
}
const FoodListTitle = ({ category, id }: IProps) => {
	return (
		<h2 id={id}>
			<span>{category}</span>
		</h2>
	);
};

export default FoodListTitle;
