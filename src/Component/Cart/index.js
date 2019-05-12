import React, { Component } from "react";
import Items from './Items';
class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {this.props.show ? (
          <Items/>
      ) : (
         <div>

         </div>
      )}
      </div>
    );
  }
}
export default Cart;
