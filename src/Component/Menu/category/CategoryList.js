import React, { Component } from "react";

import "../../../sass/components/category.scss";
import { Link } from "react-scroll";

//import Category  from "./Category";

class CategoryList extends Component {
  renderItem(item) {
    return (
      <Link
        key={`${item.id}`}
        className=" indexbox"
        activeClass="active"
        to={item.id.toString()}
        spy={true}
        smooth={true}
        offset={-70}
      >
        <div className="inner scroll">
          <img className="img" src={`/img/${item.logo}.png`} alt="true" />
          <b className="caption">{item.title}</b>
        </div>
      </Link>
    );
  }

  render() {
    return (
      <div className="parent">
        <div className="categories">
          {this.props.items.map(this.renderItem)}
        </div>
      </div>
    );
  }
}

export default CategoryList;
