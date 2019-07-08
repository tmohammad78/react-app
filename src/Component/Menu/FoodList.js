import React, { Component } from "react";
import Food from "./food/Food";
import axios from "axios";

import Modal from "./modal/Index";
import { parseMenu } from "./util/menu";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: null,
      value: "",
      show: true,
      modalSelectedFood: null,
      quantity: []
    };

    this.foodPack = this.foodPack.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCart = this.renderCart.bind(this);
    this.getFood = this.getFood.bind(this);
  }
  // shouldComponentUpdate(nextProps,nextState){
  //     return this.state.quantity!==nextState.quantity;
  // }

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

        /// get az local quantity

        let tempCart = sessionStorage.getItem("key");
        console.log(tempCart);

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
  };

  renderCart(foodList) {
    console.log("ddd");
    console.log(foodList);
    return <div>{}</div>;

    // const cartItems = [];
    // let sessionData = [];
    // let totalPrice = 0;
    // let test;
    // foodList.forEach((item, i) => {
    //   item.foods.forEach(food => {
    //     if (food.quantity > 0) {
    //       cartItems.push(food);
    //       sessionData.push(food.id + ":" + food.quantity);
    //       totalPrice += food.price * food.quantity;
    //     }
    //   });
    // });
    // clearTimeout(this.cartTimer);
    // this.cartTimer = setTimeout(() => {
    //   sessionStorage.setItem("cart", JSON.stringify(sessionData));
    // }, 1000);

    // test = cartItems.map((item, i) => {
    //   if (item.quantity > 0) {
    //     return (
    //       <div>
    //         {item.title} ++ {item.quantity} + {item.price}
    //       </div>
    //     );
    //   }
    // });
    // return (
    //   <div>
    //     {test}
    //     {totalPrice > 0 ? totalPrice : ""}
    //   </div>
    // );
  }

  getFood(id) {
    const foodList = this.state.foodList;
    let food = null;
    for (var i = 0; i < foodList.length; i++) {
      for (var j = 0; j < foodList[i].foods.length; j++) {
        const subData = foodList[i].foods[j];
        if (subData) {
          if (subData.id === id) {
            food = subData.title;
            break;
          }
        }
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
            this.setState({
              show: false
            });
          } else {
            foodList[i].foods[j].hide = true;
          }
        } else {
          foodList[i].foods[j].hide = false;
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
        <div className="foodPack" key={`${item.id}-${i}`} id={item.id}>
        <h3 className="Header">{title}</h3>
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
                      modalSelectedFood: item
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
          <div className="">

          </div>
          <div className="main-content">
            <div className="resProfile container">
              <div className=" clearfix" style={{position:"relative"}} >
              <div className="col-md-9">
                <div className="FoodBox">
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
                  <div className="FoodBox-inner clearfix">
                        <div className="container-fluid clearfix">
                          <div className="clearfix" style={{ position:"relative"}}>
                          <div className="col-md-3 category " style={{position:'sticky' , top:50}} >
                              sfvkj
                          </div>
                           <div className="col-md-9">
                            <div className="inner" style={{paddingLeft:10}} >
                           {foodList.map(this.foodPack)}

                            </div>
                           </div>
                          </div>
                        </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3 " style={{ position:"sticky" , top:0}}>
                  {/* <Cart
                  show={true}
                  foodList={this.state.foodList}
                /> */}
                <div className="basketBox">
                    <div className="basketHeader">
                        <div className="inner">
                              سفارشات
                        </div>
                    </div>
                    <div className="emptyBasket">
                        سبد شما خالی است.
                    </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          {

          }
          {this.state.modalSelectedFood ? (
            <Modal
              item={this.state.modalSelectedFood}
              backDrop={true}
              close={true}
              onClose={() => {
                this.setState({
                  modalSelectedFood: null
                });
              }}
            />
          ) : null}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="lds-dual-ring" />
        </React.Fragment>
      );
    }
  }
}

export default FoodList;
