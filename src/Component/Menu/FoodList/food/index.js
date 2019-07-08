import React, { useState } from "react";
import { currency } from "../../../../helper/index";
import PropTypes from "prop-types";

const Food = ({ items, onAddFood, onRemoveFood }) => {
	let image;
	let className = [];
	let removeBtn;
	const [ingredient, setIngredient] = useState("");
	const renderImageFood = data => {
		return data.replace("#SIZEOFIMAGE#", "280x175");
	};
	if (items.img) {
		image = <img src={renderImageFood(items.img)} alt="true" />;
	} else {
		image = null;
	}
	if (items.quantity > 0) {
		className.push("active-box");
		removeBtn = (
			<button className="removeButton" onClick={() => onRemoveFood(items)}>
				<div className="fo fo-minus" />
			</button>
		);
	}
	return (
		<div className="food-item">
			<section
				className={className.map(item => {
					return item;
				})}
			>
				<div className="qty-badge transition-all">
					<span>{items.quantity > 0 ? currency(items.quantity, false) : null}</span>
				</div>
				<figure className="food-img ">
					{image}
					<div className="ingredient">
						<span>
							<b>{items.ingredient}</b>
						</span>
					</div>
				</figure>
				<div className="details-holder">
					<header>
						<h3>{items.title}</h3>
						<span>
							<small>{items.price ? currency(items.price) : ""}</small>
						</span>
					</header>
					<div className="qty-holder">
						{removeBtn}
						<span style={{ color: "red" }}>
							{items.quantity > 0 ? currency(items.quantity, false) : ""}
						</span>
						<button className="addButton" onClick={() => onAddFood(items)}>
							<div className="fo fo-plus" />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

Food.propTypes = {
	items: PropTypes.object.isRequired,
	onAddFood: PropTypes.func.isRequired,
	onRemoveFood: PropTypes.func.isRequired
};
export default Food;
