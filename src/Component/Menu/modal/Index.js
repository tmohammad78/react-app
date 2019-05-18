import React, { Component } from "react";
import Item from "./Item";
import "../../../sass/components/popup.scss";
class Modal extends Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
  imageFood(data){
    return data.replace("#SIZEOFIMAGE#", "280x175");
  };
  close =(e)=>{
    e.preventDefault();
    this.props.isOpen();
    this.props.close();
  }
=======
>>>>>>> 1dea717c9f7beac34299c384b58b319f218fd740
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
