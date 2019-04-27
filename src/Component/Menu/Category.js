import React, { Component } from "react";

import "../../sass/components/category.scss";

class Category extends Component {
  state = {
    title: ""
  };

  componentWillMount() {
    this.timer = setTimeout(() => {
      //if (!this.willUnmount) {
        this.setState({
          title: "done"
        });
      //}
    }, 3000);
  }

  componentWillUnmount() {
    //this.willUnmount = true;
    clearTimeout( this.timer);
  }

  render() {
    console.log(this.props.title + " " + this.state.title);
    return (
      <div className="categories__indexbox" data-cat-id={this.props.id}>
        <a className="categories__indexbox--inner scroll">
          <img className="categories__img " src={this.props.logo} />
          <b className="categories__caption">{this.props.title}</b>
        </a>
      </div>
    );
  }
}

export default Category;
