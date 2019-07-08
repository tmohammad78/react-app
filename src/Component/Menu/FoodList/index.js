import React, { Component } from "react";
import Food from "./food/index";
import { connect } from "react-redux";
import { addFood, removeFood } from "../../../services/cart/actions";

class FoodList extends Component {
	constructor(props) {
		super(props);
		this.foodPack = this.foodPack.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.productToUpdate !== this.props.productToUpdate) {
			this.updateProduct(nextProps.productToUpdate);
		}
	}

	updateProduct(item) {
		const { menu } = this.props;
		const Product = menu.find(x => x.id == item.id);
		if (Product) {
			Product.quantity = item.quantity;
		}
	}

	foodPack(item, i) {
		const { addFood, removeFood } = this.props;
		let title = item.title;
		const foodList = item.foods;
		return (
			<div className="food-list" key={i} name={item.id}>
				<h2>
					<span>{title}</span>
				</h2>
				<div className="food-pack clearfix">
					{foodList.map((food, i) => {
						return (
							<Food
								items={food}
								key={i}
								onAddFood={addFood}
								onRemoveFood={removeFood}
							/>
						);
					})}
				</div>
			</div>
		);
	}

	render() {
		const { menu } = this.props;
		console.log(menu)
		return menu.map(this.foodPack);
	}
}
const mapStateToProps = state => ({
	menu: state.menu.categoryList,
	productToUpdate: state.menu.productToUpdate
});

export default connect(
	mapStateToProps,
	{ addFood, removeFood }
)(FoodList);
