import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/components/card.scss";
import "../../sass/layout/grid.scss";
import { truncate, currancy } from "../../helper/index";
import FontAwesome from 'react-fontawesome';
class Food extends Component {
  imageFood(data) {
    return data.replace("#SIZEOFIMAGE#", "280x175");
  }

  render() {
    const { item } = this.props;
    let image;
    if(item.img){
     image = (
        <img className="food_Box__img" src={this.imageFood(item.img)} />
      );
    }else{
     image = (
        <img className="food_Box__img nullImage" src="/img/fig-cart-empty.png" />
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
              <button className="btn-plus">
                    <img src="/img/add.svg"></img>        
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
