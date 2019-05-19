import React from "react";
import { Component } from "react";
import "../../../sass/components/popup.scss";
import '../../../sass/components/button.scss';

import { currency } from "../../../helper/index";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  imageFood(data) {
    return data.replace("#SIZEOFIMAGE#", "560x350");
  }

  close = e => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    let date = new Date();
    let item = this.props.item;
    let image;
    if (item.img) {
      image = (
        <img className="imageFood" src={this.imageFood(item.img)} alt="true" />
      );
    } else {
      image = (
        <img
          className="imageFood nullImage"
          src="/img/fig-cart-empty.png"
          alt="true"
        />
      );
    }

    let discount;
    if (item.discountPercentage) {
      discount = (
        <div className="discount discount-popup">
          <span>{currency(item.discountPercentage, false)}</span>
        </div>
      );
    } else {
      discount = "";
    }

    let unavailableText;
    let qty;
    if (date < 10) {
      unavailableText = (
        <label className="unavailableText">
          <span>{item.unavailableText}</span>
        </label>
      );
    } else {
      unavailableText = "";
      qty = (
        <div className="addBtn">
          <div className="quantity-holder">
            <button className="btn-plus">
              <img className="addModal"  src="/img/add.svg" alt="true" />
            </button>
            {/* {addBox} */}
          </div>
        </div>
      );
    }

    return (
      <div className="popup__content ">
        <header className="header">
          <button className="btn-action anc-close">
            <img
              className="closeImg"
              src="/img/close.svg"
              onClick={this.close}
            />
          </button>
        </header>
        <section>
          <figure className="figure">{image}</figure>
          <div className="bottomBox">
          {discount}
          <div className="details">
            <h1 style={{ color:"black" }} > {item.title} </h1>
            <div className="ingredient">{item.ingredient}</div>
            <footer>
              <span className="price">{currency(item.price)} </span>
              {qty}
            </footer>
          </div>
          <div className="parent-btn">
            <button className="btn-cart">افزودن به سبد خرید</button>
          </div>
          </div>

        </section>
      </div>
    );
  }
}
export default Item;
