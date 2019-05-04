import React, { Component } from "react";
import Category from "./Category";
import axios from "axios";
import FoodList from "./FoodList";
import '../../sass/layout/grid.scss';
import "../../sass/layout/foodBox.scss";


class Menu extends Component {
  state = {
    loading: true,
    foodList: []
  };

  componentDidMount() {}

  componentWillMount() {
    axios
      .get(
        "https://api.delino.com/restaurant/menu/890d958f-9e64-4211-a2fa-d732c7a3920f"
      )
      .then(response => {
        const { data } = response;
        const foodList = data.categories;
        const prices = foodList;
        prices.sort((a, b) => {
          return a.index - b.index;
        });
        this.setState({ prices });
        this.setState({ foodList });
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  sorting = () => {};

  render() {
    if (this.state.loading) {
      return <React.Fragment><div class="lds-dual-ring"></div><p className="loading" >Loading...</p></React.Fragment>
    }

    return (
      <div className="fullBox" >
        <div className="parent">
          <div className="categories">
            {this.state.foodList.map((item, i) => {
              return <Category item={item} key={`cat-${i}`} />;
            })}
          </div>
        </div>
        <div className="foodBox">
          {this.state.foodList.map((item, i) => {
            return <FoodList item={item} key={`food-${i}`} />;
          })}
        </div>
      </div>
    );
  }
}
export default Menu;
