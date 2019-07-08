import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadCart, addFood, removeFood } from "../../services/cart/actions";
import { updateCart } from "../../services/total/actions";
import { updateProduct } from "../../services/menu/actions";
import CartProduct from "./CartProduct";
import { currency } from "../../helper/index";
import "./style.scss";

class FloatCart extends Component {
	static propTypes = {
		loadCart: PropTypes.func.isRequired,
		updateCart: PropTypes.func.isRequired,
		cartProducts: PropTypes.array.isRequired,
		foodToAdd: PropTypes.object,
		removeFood: PropTypes.func,
		productToRemove: PropTypes.object
	};

	state = {
		isOpen: false,
		isForm: false
	};

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	const { filters: nextFilters, sort: nextSort } = nextProps;
	// 	if (nextFilters !== prevState.filters) {
	// 		return { filters: nextFilters, isLoading: true };
	// 	}
	// 	if (nextSort !== prevState.sort) {
	// 		return { sort: nextSort, isLoading: true };
	// 	}
	// 	return null;
	// }
	componentWillReceiveProps(nextProps) {
		if (nextProps.foodToAdd !== this.props.foodToAdd) {
			this.addFood(nextProps.foodToAdd);
		}
		if (nextProps.foodToRemove !== this.props.foodToRemove) {
			this.removeFood(nextProps.foodToRemove);
		}
	}

	openCart = () => {
		this.setState({ isOpen: true });
	};

	closeCart = () => {
		this.setState({ isOpen: false });
	};

	addFood = ({ product, quantity }) => {
		const { cartProducts, updateCart, updateProduct } = this.props;
		let productAlreadyInCart = false;
		let totalQuantity = quantity;
		cartProducts.forEach(cp => {
			if (cp.id === product.id) {
				cp.quantity += quantity;
				totalQuantity = cp.quantity;
				productAlreadyInCart = true;
			}
		});

		if (!productAlreadyInCart) {
			product.quantity = quantity;
			cartProducts.push(product);
		}

		updateProduct({ id: product.id, quantity: totalQuantity });
		updateCart(cartProducts);
		// this.openCart();
	};

	removeFood = ({ product, fullRemove }) => {
		const { cartProducts, updateCart, updateProduct } = this.props;
		product.quantity -= 1;
		if (fullRemove || !(product.quantity > 0)) {
			const index = cartProducts.findIndex(p => p.id === product.id);
			if (index >= 0) {
				cartProducts.splice(index, 1);
			}
		}
		updateCart(cartProducts);
		updateProduct({ id: product.id, quantity: product.quantity });
	};

	proceedToCheckout = () => {
		const { totalPrice, productQuantity } = this.props.cartTotal;

		if (!productQuantity) {
			alert("Add some product in the cart!");
		} else {
			// alert(`Checkout - Subtotal: ${currencyFormat} ${formatPrice(totalPrice, currencyId)}`);
		}
	};

	renderOffForm = () => {
		this.setState({
			isForm: true
		});
	};

	render() {
		const { totalPrice, productQuantity } = this.props.cartTotal;
		let emptyCart;
		let offForm;
		const { cartTotal, cartProducts, removeFood, addFood } = this.props;
		const products = cartProducts.map((item, i) => {
			return <CartProduct product={item} removeFood={removeFood} addFood={addFood} key={i} />;
		});
		let classes = ["cart_box"];
		if (!!this.state.isOpen) {
			classes.push("cart_box--open");
		}
		if (this.state.isForm) {
			offForm = (
				<div>
					<form className="add-coupon">
						<aside>
							<input
								type="text"
								placeholder="کد تخفیف رو وارد کن"
								value
								maxLength="15 "
								style={{ direction: "rtl" }}
								role="textbox"
							/>
							<button className="btn-small btn-submit">
								<span>ثبت کد</span>
							</button>
						</aside>
					</form>
				</div>
			);
		}
		// if (!cartTotal.productQuantity) {
		// 	emptyCart = (
		// 		<div className="empty-cart">
		// 			<i className="fo fo-empty-bag" />
		// 			<span>سبد خالی است</span>
		// 		</div>
		// 	);
		// } else {
		// 	emptyCart = null;
		// }
		return (
			<React.Fragment>
				<div
					className="side-section"
					style={{
						width: 343.141,
						position: "inherit",
						top: "auto",
						height: "auto",
						bottom: "auto"
					}}
				>
					<div className="rest-cart clearfix">
						{!cartTotal.productQuantity ? (
							<div className="empty-cart">
								<i className="fo fo-empty-bag" />
								<span>سبد خالی است</span>
							</div>
						) : (
							<React.Fragment>
								<header className="clearfix">
									<h3>سبد خرید</h3>
									<div className="cart-quantity">
										<span className="cart-size round-full">
											{currency(productQuantity, false)}
										</span>
									</div>
								</header>
								<div className="cart-holder-inner thin-scrollbar">
									<div className="cart-list-holder">
										<div className="cart-list">
											<div>
												<section className="has-items">
													<div className="user-cart-list">
														<div>{products}</div>
													</div>
												</section>
											</div>
										</div>
									</div>
									<div className="cart-bottom">
										{/* <div className="row cart-discount" />
									<div className="row coupon-row" />
									<div className="row cart-delivery" />
									<div className="row cart-tax" /> */}
										<div className="row cart-total">
											<label>هزینه ی کل</label>
											<span>
												<b className="total-price">
													{currency(totalPrice)}
												</b>
											</span>
										</div>
										<div className="row add-coupon-holder">
											<button
												className="anc-coupon-form"
												onClick={() => {
													this.renderOffForm();
												}}
											>
												کد تخفیف دارید؟
											</button>
											{offForm}
										</div>
										<div className="row button-holder">
											<button className="btn-default btn-checkout">
												<span>نهایی کردن سفارش</span>
											</button>
										</div>
									</div>
								</div>
							</React.Fragment>
						)}
					</div>
				</div>
				<button className="anchor-cart">
					<h3>
						<i className="fo fo-cart" />
						<span>سبد خرید</span>
					</h3>
					<b>
						<span>{currency(productQuantity, false)}</span>
					</b>
				</button>
			</React.Fragment>
		);
	}
}
// width: 343.141px;
// position: inherit;
// top: auto;
// height: auto;
// bottom: auto;
const mapStateToProps = state => ({
	cartProducts: state.cart.products,
	newFood: state.cart.foodToAdd,
	foodToRemove: state.cart.foodToRemove,
	foodToAdd: state.cart.foodToAdd,
	cartTotal: state.total.data
});
export default connect(
	mapStateToProps,
	{ loadCart, updateCart, removeFood, addFood, updateProduct }
)(FloatCart);

// <div className={classes.join(" ")}>
// {this.state.isOpen && (
// 	<header className="clearfix">
// 		<button className="anc-cl" onClick={() => this.closeCart()}>
// 			X
// 		</button>
// 		<h3>سبد خرید</h3>
// 	</header>
// )}
// {!this.state.isOpen && (
// 	<div className="left-side-holder side-holder readytomove">
// 		<button
// 			className="anchor-cart transition-all "
// 			onClick={() => this.openCart()}
// 		>
// 			<h3>
// 				<span>سبد خرید</span>
// 				<b className="cart-quantity">
// 					({productQuantity ? currency(productQuantity, false) : " "})
// 				</b>
// 			</h3>
// 			<div className="total-price" />
// 		</button>
// 	</div>
// )}
// <div className="cart-holder-inner thin-scrollbar">
// 	<div className="cart-list-holder">
// 		<div className="cart-list">
// 			<div>
// 				<section className="has-items">
// 					<div className="user-cart-list">
// 						<div>{products}</div>
// 					</div>
// 				</section>
// 			</div>
// 		</div>
// 		{emptyCart}
// 	</div>
// 	<div className="cart-bottom">
// 		<div className="row cart-discount" />
// 		<div className="row coupon-row" />
// 		<div className="row cart-delivery" />
// 		<div className="row cart-tax" />
// 		<div className="row cart-total">
// 			<label>هزینه ی کل</label>
// 			<b className="total-price">{currency(totalPrice)}</b>
// 		</div>
// 		<div className="add-coupon-holder">
// 			<button
// 				className="anc-coupon-form"
// 				onClick={() => {
// 					this.renderOffForm();
// 				}}
// 			>
// 				کد تخفیف دارید؟
// 			</button>
// 			{offForm}
// 		</div>
// 		<div className="row button-holder" />
// 	</div>
// </div>
// </div>
// );
