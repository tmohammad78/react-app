import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../sass/components/card.scss";
import "../../../sass/layout/grid.scss";
import "../../../helper/index";
import { truncate, currency, discountPrice } from "../../../helper/index";
class Food extends Component {
  constructor(props) {
    super();
    this.state = {
      haveDiscount: false,
      activeDiscountshow: "boxImage"
    };
  }

  imageFood(data){
    return data.replace("#SIZEOFIMAGE#", "280x175");
  };

  changeCount = action => e => {
    const { onChangeQuantity } = this.props;
    onChangeQuantity(action);
  };

  showDetails(e){
    e.preventDefault();
    if (!this.props.inModal){
      this.props.onSelect();
    }
  };

  render() {
    let className;
    let date = new Date().getHours();
    const { item } = this.props;
    // if(item.discountPercentage !==0  ){
    //   this.setState({
    //     activeDiscountshow:'boxImage'
    //   })
    // }
    if (item.discountPercentage !== 0) {
      this.setState.haveDiscount = true;
    }
    if (this.state.haveDiscount === true) {
      className = "price-discount";
    } else {
      className = "price";
    }
    let image;
    if (item.img) {
      image = (
        <img
          className="food_Box__img"
          src={this.imageFood(item.img)}
          alt="true"
          onClick={this.showDetails.bind(this)}
        />
      );
    } else {
      image = (
        <img
          className="food_Box__img nullImage"
          src="/img/fig-cart-empty.png"
          alt="true"
        />
      );
    }
    let showDiscount;
    if (this.state.activeDiscountshow === "boxImageDiscount") {
      showDiscount = <div className="discountBox">dbd;lkdv</div>;
    } else {
      showDiscount = "";
    }

    const quantity = item.quantity || 0;
    let addBox;
    if (quantity) {
      addBox = (
        <React.Fragment>
          <span className="quantity">{quantity}</span>
          <button className="btn-minus" onClick={this.changeCount("remove")}>
            <img src="/img/remove.svg" alt="true" />
          </button>
        </React.Fragment>
      );
    }
    let discount;
    if (item.discountPercentage) {
      discount = (
        <div className="discount">
          <span>{currency(item.discountPercentage, false)}</span>
        </div>
      );
    } else {
      discount = "";
    }

    let unavailableText;
    let qty;
    if (date < 13) {
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
            <button className="btn-plus" onClick={this.changeCount("add")}>
              <img src="/img/add.svg" alt="true" />
            </button>
            {addBox}
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        {discount}
        <div className="desimg">
          <figure
            className={
              item.discountPercentage === 0
                ? "boxImage"
                : this.state.activeDiscountshow
            }
          >
            {image}
          </figure>
          {showDiscount}
          <div className="description">
            <div className="index">
              <h3>{item.title}</h3>
              <p>{truncate(item.ingredient)}</p>
            </div>
          </div>
        </div>
        <div className="last">
          <div className={className}>{currency(item.price)}</div>
          {item.discountPercentage ? (
            <div>{discountPrice(item.price, item.discountPercentage)}</div>
          ) : null}
          {unavailableText}

          {qty}
        </div>
      </React.Fragment>
    );
  }
}
export default Food;
