import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/components/card.scss";
import "../../sass/layout/grid.scss";
import { truncate, currancy } from "../../helper/index";
import Cart from "./Cart";
class Food extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;
    const count = item.quantity || 0;

    this.state = {
      count
    };

    //this.changeCount = this.changeCount.bind(this);
    //this.removeBtn = this.removeBtn.bind(this);
  }

  imageFood = data => {
    return data.replace("#SIZEOFIMAGE#", "280x175");
  };

  changeCount = action => e => {
    const { onChangeQuantity } = this.props;
    onChangeQuantity(action);
  };

  // removeBtn(e) {
  //   e.preventDefault();
  //   if (this.state.count > 1) {
  //     this.setState({
  //       count: this.state.count - 1,
  //     });
  //   } else if (this.state.count == 1) {
  //     this.setState({
  //       count: 0,
  //     });
  //   }
  // }

  // addBtn(e) {
  //   e.preventDefault();

  //   const { onChangeQuantyti } = this.props;

  //   //onChangeQuantyti(item, "")

  //   return;
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  //   this.props.onPress();
  //   //<Cart quantiyt={this.state.count} />;
  // }

  render() {
    const { item } = this.props;
    let image;
    if (item.img) {
      image = <img className="food_Box__img" src={this.imageFood(item.img)} />;
    } else {
      image = (
        <img
          className="food_Box__img nullImage"
          src="/img/fig-cart-empty.png"
        />
      );
    }
    let addBox;
    if (this.state.count) {
      addBox = (
        <React.Fragment>
          <span className="quantity">{this.state.count}</span>
          <button className="btn-minus" onClick={this.changeCount("remove")}>
            <img src="/img/remove.svg" />
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
                <img src="/img/add.svg" />
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
