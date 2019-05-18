import React, { Component } from "react";
import { currency, discountPrice } from "../../../helper/index";
import "../../../sass/components/popup.scss";
class Modal extends Component {
  constructor(props) {
    super(props);
  }

  imageFood(data) {
    return data.replace("#SIZEOFIMAGE#", "280x175");
  }
  close = e => {
    e.preventDefault();
    this.props.isOpen();
  };
  render() {
    let image;
    if (this.props.item.img) {
      image = (
        <img
          className="imageFood"
          src={this.imageFood(this.props.item.img)}
          alt="true"
        />
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
    if (this.props.item.discountPercentage) {
      discount = (
        <div className="discount discount-popup">
          <span>{currency(this.props.item.discountPercentage, false)}</span>
        </div>
      );
    } else {
      discount = "";
    }
    console.log(this.props.item);
    // const items=this.props.item;
    //food-box-holder
    return (
      <div className="popup">
        <div className="popup__content ">
          {discount}
          <header>
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
            <div className="details">
              <h2> {this.props.title} </h2>
              <div className="ingredient">{this.props.item.ingredient}</div>
              <footer>
                <span className="price">
                  {currency(this.props.item.price)}{" "}
                </span>
                <div className="quantity-holder">
                  <button className="btn-plus" />
                  <span className="quantity"> </span>
                  <button className="btn-minus" />
                </div>
              </footer>
            </div>
            <div className="parent-btn">
              <button className="btn-cart">افزودن به سبد خرید</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Modal;
