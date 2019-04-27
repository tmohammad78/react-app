import React, { Component } from "react";
import Category from "./Category";
import axios from "axios";

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
        this.setState({ foodList });
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  sorting = () => {
    const prices = this.state;
    prices.sort((a, b) => {
      return a.index - b.index;
    });
    this.setState({ prices });
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="parent" data-show-category="true">
        <div className="categories">
          {!this.state.timeEnd ? <Category title="yes" /> : null}

          {/* {// console.log(this.state.foodList)
          this.state.foodList.map((item, i) => {
            return <Category title={item.title} />;
          })} */}
        </div>
      </div>
    );
  }
}
export default Menu;
