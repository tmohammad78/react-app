import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    const currentPath=window.location.pathname;
    console.log(currentPath);
    return (
      <div className="homePage">
        <div className="inner">
          <p className="title">خوش آمدید</p>
          <Link to={"/order/menu"} className="anchor-Link">
            سفارش گیری
          </Link>


          {/* <a href="#" onClick={this.changeRoute(path)} ></a> */}
        </div>
      </div>
    );
  }
}
export default Home;
