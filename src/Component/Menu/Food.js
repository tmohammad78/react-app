import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/components/card.scss";
import "../../sass/layout/grid.scss";
import { truncate, currancy } from "../../helper/index";

class Food extends Component {
  imageFood(data) {
    return data.replace("#SIZEOFIMAGE#", "280x175");
  }

  render() {
    const { item } = this.props;
    const image = (
      <img className="food_Box__img" src={this.imageFood(item.img)} />
    );

    return (
      <div className="food_Box food-box-holder col-1-of-3">
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
          <div className="cartBox">
            <div className="quantity-holder">
              <button className="btn-plus">
                <img src="../../img/plus.svg" />
              </button>
              <span className="quantity"> </span>
              <button className="btn-minus" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Food;
