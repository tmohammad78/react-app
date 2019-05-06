import React, { Component } from "react";
import CategoryList from "./CategoryList";
import FoodList from "./FoodList";
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
        <FoodList
          ready={categories =>
            this.setState({
              categories
            })
          }
        />
      </div>
    );
  }
}
export default Menu;
