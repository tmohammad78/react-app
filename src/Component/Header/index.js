import React, { Component } from "react";
import Cart from "../Cart/index";
import "../../sass/layout/header.scss";
import "../../sass/components/button.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.showCart = this.showCart.bind(this);

  }

  inputChangeHeader = event => {
    // console.log(event.target.value);
    this.setState({
      keywords: event.target.value
    });
  };

  showCart(e) {
    this.props.ready(true);
  }

  render() {
    const { show } = this.props;
    console.log(show);
    return (
      <div className="header-section">
        <button className="btn btn-showCount " onClick={this.showCart}>
          <img
            className="shopping-cart-icon"
            src="/img/shopping-cart.svg"
            alt="search"
          />
          <span className="header-number" id="cart-count" />
        </button>
      </div>
    );
  }
}

export default Header;
