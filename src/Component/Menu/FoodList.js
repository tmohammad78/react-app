import React, { Component } from "react";
import Food from "./food/Food";
import axios from "axios";
import Cart from "./Cart/Index";
import Modal from "./modal/Index";
import { parseMenu } from "./util/menu";
import "../../sass/components/card.scss";
import "../../sass/layout/foodBox.scss";
import "../../sass/layout/grid.scss";
import "../../sass/components/card.scss";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: null,
      value: "",
      show: true,
      selectedFood: null,
      showModal:true
    };

    this.foodPack = this.foodPack.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    const { ready } = this.props;
    axios
      .get(
        "https://api.delino.com/restaurant/menu/890d958f-9e64-4211-a2fa-d732c7a3920f"
      )
      .then(response => {
        const { data } = response;
        const menu = parseMenu(data);
        console.log(menu);

        // foodList = foodList.sort((a, b) => {
        //   return a.index - b.index;
        // });

        /// get az local quantity
        // let tempCart = sessionStorage.getItem("key");
        // console.log(tempCart);

        // if (tempCart) {
        //   let cart_arr = tempCart.split("-");
        //   cart_arr.forEach(node => {
        //     let item = node.split(":");
        //     const quantity = parseInt(item[1]);
        //     if (quantity > 0) {
        //       cart[item[0]] = quantity;
        //     }
        //   });
        // }

        this.setState({ foodList: menu.menuList });
        const categories = menu.categoryList;
        ready(categories);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChange = food => action => {
    let quantity = food.quantity || 0;
    if (action === "remove") {
      if (quantity > 0) {
        quantity--;
      }
    } else {
      quantity++;
    }
    food.quantity = quantity;
    const foodList = [...this.state.foodList];
    this.setState({
      foodList
    });

    console.log(foodList);

    // store local
    sessionStorage.setItem("key", food.id);

    if (food.quantity === 0) {
      sessionStorage.removeItem(food.id);
    }

    this.props.reloadCart();
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

  handleSearch(event) {
    const value = event.target.value || "";
    this.setState(
      {
        value
      },
      () => {
        this.search(value);
      }
    );
  }

  search(value) {
    //console.log(value)
    const foodList = [...this.state.foodList];
    for (var i = 0; i < foodList.length; i++) {
      for (var j = 0; j < foodList[i].foods.length; j++) {
        console.log(foodList[i].foods[j]);
        if (value) {
          if (
            foodList[i].foods[j].title.indexOf(value) > -1 ||
            foodList[i].foods[j].ingredient.indexOf(value) > -1
          ) {
            console.log(foodList[i].foods[j].title, true);
            foodList[i].foods[j].hide = false;
            // subData[z].hide = false;
            this.setState({
              show: false
            });
          } else {
            foodList[i].foods[j].hide = true;
            // subData[z].hide = true;
          }
        } else {
          foodList[i].foods[j].hide = false;
          // subData[z].hide = false;
        }
      }
    }
  }

  foodPack(item, i) {
    let title;
    if (this.state.show) {
      title = item.title;
    } else {
      title = "";
    }
    return (
      <div key={`${item.id}-${i}`} id={item.id}>
        <h1 className="Header" style={{ borderBottom: "2px solid #eeee" }}>
          {title}
        </h1>
        <div className="food_section">
          {item.foods.map((item, i) => {
            return (
              <div
                key={i}
                className="food_Box col-1-of-3"
                style={{ display: item.hide ? "none" : "inline-block" }}
              >
                <Food
                  key={`${i}`}
                  item={item}
                  onChangeQuantity={this.onChange(item)}
                  onSelect={() => {
                    this.setState({
                      selectedFood: item
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const foodList = this.state.foodList;
    if (foodList) {
      return (
        <React.Fragment>
          <div className="shopCart">
            <Cart />
          </div>
          <div className="foodBox">
            <div className="searchBox">
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
                    onChange={this.handleSearch}
                    value={this.state.value}
                  />
                </div>
              </div>
            </div>
            {foodList.map(this.foodPack)}
          </div>
          {this.state.selectedFood && this.state.showModal  ? 
        <Modal item={this.state.selectedFood}  backDrop={true} title={this.state.selectedFood.title} close={()=>{this.setState({ closeModal })}} isOpen={()=>{ this.setState({ showModal:false  }) }}>
          
        </Modal>
           :
          null
          }
          {/* {this.state.selectedFood ? (
            <div className="modal">
              <Food
                inModal={true}
                item={this.state.selectedFood}
                onChangeQuantity={this.onChange(this.state.selectedFood)}
              />
            </div>
          ) : null} */}
        </React.Fragment>
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
