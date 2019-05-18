import React, { Component } from "react";
import "../../../sass/components/popup.scss";
class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="popup__content food-box-holder">
        <header>
          <button className="btn-action anc-close" />
        </header>
        <section>
          <figure className="figure" />
          
        </section>
      </div>
    );
  }
}
export default Modal;
