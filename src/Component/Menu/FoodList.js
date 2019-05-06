import React, { Component } from "react";
import Food from "./Food.js";
import axios from "axios";
import "../../sass/components/card.scss";
import "../../sass/layout/foodBox.scss";
import "../../sass/layout/grid.scss";
import "../../sass/components/card.scss";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: []
    };
  }

  componentWillMount() {
    const { ready } = this.props;
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
        this.setState({ foodList });

        const categories = foodList.map(item => {
          return { id: item.id, title: item.title, logo: item.logo };
        });
        ready(categories);
      })
      .catch(error => {
        console.log(error);
      });
  }

  foodPack(item) {
    return (
      <div id={item.id}>
        <h1 className="Header">{item.title}</h1>
        <div className="food_section">
          {/* {this.props.Food.sub[0].food.map((item, i) => {
            return <div className="">{item.title}</div>;
          })} */}
          {item.sub[0].food.map((item, i) => {
            // console.log(item);
            // return <div>{item.title}</div>
            return <Food item={item} />;
          })}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.foodList.length) {
      return (
        <div className="foodBox">{this.state.foodList.map(this.foodPack)}</div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="lds-dual-ring" />
          <p className="loading">Loading...</p>
        </React.Fragment>
      );
    }
  }
}

export default FoodList;
