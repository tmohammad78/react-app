import React, { Component } from "react";
import Food from './Food.js';
import "../../sass/components/card.scss";

class FoodList extends Component {
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
  //            {console.log(this.props.Food.title)}
  rendercart(item, i) {}

  render() {
    const { item } = this.props;

    const data = item.sub[0];

    return (
      <div id={item.id}>
        <h1 className="Header">{item.title}</h1>
        <div className="food_section" >
          {/* {this.props.Food.sub[0].food.map((item, i) => {
            return(
                <div className="" >
                    {item.title}
                </div>
            )
          })} */}
          {
            data.food.map((item,i)=>{
              return(
                <Food item={item} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default FoodList;
