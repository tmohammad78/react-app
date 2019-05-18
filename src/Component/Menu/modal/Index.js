import React, { Component } from "react";
import Item from "./Item";
import "../../../sass/components/popup.scss";
class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.item);
    return (
      <div className="popup">
        <Item item={this.props.item} onClick={ ()=>{this.props.onClose()}  }   />
      </div>
    );
  }
}
export default Modal;
