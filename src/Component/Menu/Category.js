import React, { Component } from "react";

import "../../sass/components/category.scss";
import { Link ,animateScroll as scroll } from 'react-scroll';
import { link } from "fs";

class Category extends Component {
  state = {
    title: ""
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

    <div className="indexbox">
    <a className="inner scroll">
    <Link
        activeClass="active"
        to={item.title}
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
    >
      <img className="img" src={`/img/${item.logo}.png`} />
      <b className="caption">{item.title}</b>
      </Link>
    </a>
  </div>
    );
  }
}

export default Category;
