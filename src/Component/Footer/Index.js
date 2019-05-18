import  React  from "react";
import {Component} from 'react';
import "../../sass/components/footerBox.scss";
import '../../sass/components/button.scss';
class Footer extends Component {
  render() {
    return (
      <div className="footerBox">
            <div>
                <span>خانه</span>
            </div>
            <button className="btn-buy" ><img className="img"  src="/img/shopping-cart.svg"></img> </button>
            <div >
                <button>بروفایل</button>
            </div>
      </div>
    );
  }
}
export default Footer;
