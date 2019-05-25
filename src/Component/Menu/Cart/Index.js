import React, { Component } from "react";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.handel = this.handel.bind(this);
  }

  handel(foodList) {
    // console.log(foodList);
    // foodList = JSON.parse(foodList);
    const cartItems = [];
    let sessionData = [];
    let totalPrice = 0;
    let test;
    foodList.forEach((item, i) => {
      item.foods.forEach(food => {
        if (food.quantity > 0) {
          cartItems.push(food);
          sessionData.push(food.id + ":" + food.quantity);
          totalPrice += food.price * food.quantity;
        }
      });
    });

    clearTimeout(this.cartTimer);
    this.cartTimer = setTimeout(() => {
      sessionStorage.setItem("cart", JSON.stringify(sessionData));
    }, 1000);

    test = cartItems.map((item, i) => {
      if (item.quantity > 0) {
        return (
          <div>
            {item.title} ++ {item.quantity} + {item.price}
          </div>
        );
      }
    });
    return (
      <div>
        {test}
        {totalPrice > 0 ? totalPrice : ""}
      </div>
    );
  }

  render() {
    if (this.props.show) {
      
      return null;
      //console.log(this.props.foodList)
      return (
        <div className="shop">
          <div className="lightBox transition-all" data-close-modal />
          <div className="cartBox transition-all">
            <header className="header-cart">
              <button
                className="btn-action anc-close close-cart"
                data-close-modal
                onClick={this.props.onPress}
              >
                <i className="icon-close" />
              </button>
              <div className="cart-text">
                <i className="icon-shopping-cart" />
                <span style={{ display: "inline" }}>سبد خرید</span>
              </div>
            </header>
            {/* <%for(var i=0; i< foodList.length; i++){%>
<div class="itemOrder food-box-holder" data-food-id="<%=foodList[i].id%>" data-show="true">
<div class="quantity-holder <%=foodList[i].quantity> 0 ? 'selected' : '' %>" data-buy="buyfood">
      <button class="btn-plus" data-cmd="increase"><i class="fas fa-plus"></i></button>
      <span class="quantity"><%=foodList[i].quantity%></span>
      <button class="btn-minus" data-cmd="decrease"><i class="fas fa-minus"></i></button>
  </div>
<div class="orderFood">
  <h3><%=foodList[i].title%></h3>
  <small><%=foodList[i].price%></small>
</div>
</div>
<%}%> */}
            {this.handel(this.props.foodList)}
            <div className="cart-bottom">
              <div className="totalPrice">
                <label for="">هزینه ی کل</label>
                <span>totalPrice</span>
              </div>
              <div className="finalOrder">
                <button className="btn btn-finalOrder">نهایی کردن سفارش</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default Cart;
