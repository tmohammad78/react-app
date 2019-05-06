import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/components/card.scss";
import "../../sass/layout/grid.scss";
import { truncate, currancy } from "../../helper/index";
class Food extends Component {
  imageFood = data => {
    return data.replace("#SIZEOFIMAGE#", "280x175");
  };

  changeCount = action => e => {
    const { onChangeQuantity } = this.props;
    onChangeQuantity(action);
  };

  // shouldComponentUpdate(props, state){
  //   console.log(state, props)
  //   return true
  // }
  

  render() {
    console.log("ok");
    const { item } = this.props;
    let image;
    if (item.img) {
      image = <img className="food_Box__img" src={this.imageFood(item.img)} alt="true" />;
    } else {
      image = (
        <img
          className="food_Box__img nullImage"
          src="/img/fig-cart-empty.png"
          alt="true"
        />
      );
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

    return (
      <div className="food_Box col-1-of-3">
        <div className="desimg">
          <figure className="boxImage">{image}</figure>
          <div className="description">
            <div className="index">
              <h3>{item.title}</h3>
              <p>{truncate(item.ingredient)}</p>
            </div>
          </div>
        </div>
        <div className="last">
          <div className="price">{currancy(item.price)}</div>
          <div className="addBtn">
            <div className="quantity-holder">
              <button className="btn-plus" onClick={this.changeCount("add")}>
                <img src="/img/add.svg" alt="true"  />
              </button>
              {addBox}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Food;
