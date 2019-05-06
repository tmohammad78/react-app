import React, { Component } from "react";
import Cart from "./Component/Menu/Cart";
import "./sass/layout/header.scss";
import "./sass/components/button.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: "testing"
    };
    this.showCart = this.showCart.bind(this);
  }

  //use arrow function to know whats event instead of that you should use bind to use setstate

  inputChangeHeader = event => {
    // console.log(event.target.value);
    this.setState({
      keywords: event.target.value
    });
  };

  showCart(e) {
    // e.preventDefault();

    return (
      <Cart />
    )
  }

  render() {
    console.log(this.state.keywords);
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
        <div action="#" className="search">
          <div className="box-input">
            <img className="search-img" src="/img/search.svg" alt="search" />
            <input
              type="text"
              className="search__input"
              placeholder="جستجوی غذا"
              name="search-input"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
