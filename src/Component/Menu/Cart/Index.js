import React, { Component } from "react";
import Items from './Items';
class Cart extends Component {
  render() {
    return <div>{this.props.show ? <Items onPress={this.props.testing} /> : <div />}</div>;
  }
}
export default Cart;
