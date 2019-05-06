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

    this.foodPack = this.foodPack.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onChange = food => action => {
    let quantity = food.quantity || 0;
    if (action === "remove") {
      quantity--;
    } else {
      quantity++;
    }
    food.quantity = quantity;

    const foodList = [...this.state.foodList];
    this.setState({
      foodList
    });
  };

  getFood(id) {
    const foodList = this.state.foodList;
    let food = null;
    for (var i = 0; i < foodList.length; i++) {
      for (var j = 0; j < foodList[i].sub.length; j++) {
        if (foodList[i].sub[j].id === 0) {
          const subData = foodList[i].sub[j].food;
          if (subData) {
            for (var z = 0; z < subData.length; z++) {
              if (subData[z].id === id) {
                food = subData[z];
                break;
              }
            }
          }
        } else {
          // loop
        }
        if (food) {
          break;
        }
      }
      if (food) {
        break;
      }
    }

    return food;
  }

  foodPack(item, i) {
    return (
      <div key={`${item.id}-${i}`} id={item.id}>
        <h1 className="Header">{item.title}</h1>
        <div className="food_section">
          {/* {this.props.Food.sub[0].food.map((item, i) => {
            return <div className="">{item.title}</div>;
          })} */}
          {item.sub[0].food.map((item, i) => {
            return (
              <Food
                key={`${i}`}
                item={item}
                onChangeQuantity={this.onChange(item)}
              />
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.foodList.length) {
      return (
        <div className="foodBox">
          <div>
            <div action="#" className="search">
              <div className="box-input">
                <div className="box-searchicon">
                  <img
                    className="search-img"
                    src="/img/search.svg"
                    alt="search"
                  />
                </div>
                <input
                  type="text"
                  className="search__input"
                  placeholder="جستجوی غذا"
                  name="search-input"
                />
              </div>
            </div>
          </div>

          {this.state.foodList.map(this.foodPack)}
        </div>
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
