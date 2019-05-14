import React, { Component } from "react";
import '../../../sass/components/popup.scss';
class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="popup__content food-box-holder" data-food-id="<%=id%>">
        <header>
          <button className="btn-action anc-close">

          </button>
        </header>
        <section>
          <figure className="figure"  />
          <div className="details">
            <h2> {this.props.title} </h2>
            <div className="ingredient">{this.props.ingredient}</div>
            <footer>
              <span className="price">{this.props.price} </span>
              <div
                className="quantity-holder"
                data-buy="buyfood"
              >
                <button className="btn-plus" data-cmd="increase">

                </button>
                <span classNameName="quantity"> </span>
                <button classNameName="btn-minus" data-cmd="decrease">
                </button>
              </div>
            </footer>
          </div>
          <div className="parent-btn">
            <button className="btn-cart" data-modal-button="false" disabled>
              افزودن به سبد خرید
            </button>
          </div>
        </section>
      </div>
    );
  }
}
export default Modal;
