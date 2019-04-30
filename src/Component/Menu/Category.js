import React, { Component } from "react";

import "../../sass/components/category.scss";

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
      <div className="categories__indexbox">
        <a className="categories__indexbox--inner scroll">
          <img className="categories__img " src={`img/${item.logo}.png`} />
          <b className="categories__caption">{item.title}</b>
        </a>
      </div>
    );
  }
}

export default Category;
