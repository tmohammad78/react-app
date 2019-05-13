import React, { Component } from "react";
import CategoryList from "./category/CategoryList";
import FoodList from "./FoodList";
import Cart from  './Cart/Index';
import "../../sass/layout/grid.scss";
import "../../sass/layout/foodBox.scss";
class Menu extends Component {
  state = {
    categories: []
  };
  render() {
    return (
      <div className="fullBox">
        <CategoryList items={this.state.categories} />
        <Cart show={this.props.show} testing={this.props.testing} />
        <FoodList
          ready={categories =>
            this.setState({
              categories
              //vaghti meghdare vorodi ba esme state yeki bashad lazem nist sample:sample benevisim
            })
          }
        />
      </div>
    );
  }
}
export default Menu;
