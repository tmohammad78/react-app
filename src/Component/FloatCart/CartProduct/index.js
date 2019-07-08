import React, { Component } from "react";
import PropTypes from "prop-types";
import { currency } from "../../../helper/index";
class CartProduct extends Component {
	static propTypes = {
		product: PropTypes.object.isRequired,
		removeProduct: PropTypes.func.isRequired
	};

	state = {
		isMouseOver: false
	};

	handleMouseOver = () => {
		this.setState({ isMouseOver: true });
	};

	handleMouseOut = () => {
		this.setState({ isMouseOver: false });
	};

	render() {
		const { product, removeFood, addFood } = this.props;
		return (
			<div className="item">
				<button className="acn-rmv" onClick={() => removeFood(product, false)}>
					x
				</button>
				<div classNames="item-holder clearfix">
					<aside>
						<h3>
							{product.title} <small>{currency(product.price)}}</small>{" "}
						</h3>
					</aside>
					<div className="qty-holder">
						<div className="food-qty">
							<button
								className=""
								style={{ position: "absolute", left: "0" }}
								onClick={() => addFood(product, 1)}
							>
								+
							</button>
							<label>{currency(product.quantity, false)}</label>
							<button className="" onClick={() => removeFood(product)}>
								-
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CartProduct;
