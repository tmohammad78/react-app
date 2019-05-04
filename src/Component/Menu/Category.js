import React, { Component } from "react";

import "../../sass/components/category.scss";
import { Link, animateScroll as scroll } from "react-scroll";

class Category extends Component {
  state = {
    title: "",
    loading: true
  };

  // componentWillMount() {
  //   this.timer = setTimeout(() => {
  //     //if (!this.willUnmount) {
  //       this.setState({
  //         title: "done"
  //       });
  //     //}
  //   }, 3000);
  // }

  // componentWillUnmount() {
  //   //this.willUnmount = true;
  //   clearTimeout( this.timer);
  // }

  render() {
    const { item } = this.props;
    return (
      <Link
        className=" indexbox"
        activeClass="active"
        to={item.id}
        spy={true}
        smooth={true}
        offset={-70}
      >
        <div className="inner scroll">
          <img className="img" src={`/img/${item.logo}.png`} />
          <b className="caption">{item.title}</b>
        </div>
      </Link>
    );
  }
}

export default Category;
