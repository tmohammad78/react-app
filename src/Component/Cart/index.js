import React, { Component } from "react";

class Cart extends Component {
  render() {
    let box;
    let check;
    check=this.props.show;
    return (
      <div className="shop">
        x<div class="lightBox transition-all" data-close-modal />
        <div class="cartBox transition-all">
          <header class="header-cart">
            <button class="btn-action anc-close close-cart" data-close-modal>
              <i class="fas fa-times" />
            </button>
            <div class="cart-text">
              <i class="fas fa-shopping-cart cart-text-icon" />
              <span>سبد خرید</span>
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
          <div class="cart-bottom">
            <div class="totalPrice">
              <label for="">هزینه ی کل</label>
              <span>totalPrice</span>
            </div>
            <div class="finalOrder">
              <button class="btn btn-finalOrder">نهایی کردن سفارش</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
