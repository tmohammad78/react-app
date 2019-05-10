import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/components/card.scss";
import "../../sass/layout/grid.scss";
import { truncate, currancy , discountPrice } from "../../helper/index";
class Food extends Component {
  state = {
    haveDiscount: false,
    activeDiscountshow:'boxImage'
  }
  imageFood = data => {
    return data.replace("#SIZEOFIMAGE#", "280x175");
  };

  changeCount = action => e => {
    const { onChangeQuantity } = this.props;
    onChangeQuantity(action);
  };

  checkTime(){
    let data=new Date();
    return console.log(data.getHours());
  }

  // shouldComponentUpdate(props, state){
  //   console.log(state, props)
  //   return true
  // }
  hoverfoodBox=(e)=>{
    this.setState({
      activeDiscountshow:'boxImageDiscount'
    },function(){
      console.log(this.state.activeDiscountshow);
    });
  }

  hoverfoodOut=(e) => {
    this.setState({
      activeDiscountshow:'boxImage'
    })
    console.log('out');
  }

  render() {
    let className;
    let date=new Date().getHours();
    console.log("ok");
    const { item } = this.props;
    // if(item.discountPercentage !==0  ){
    //   this.setState({
    //     activeDiscountshow:'boxImage'
    //   })
    // }
    if(item.discountPercentage !== 0 ){
      this.setState.haveDiscount= true;
    }
    if(this.state.haveDiscount == true){
      className='price-discount'
    }else{
      className='price'
    }
    let image;
    if (item.img) {
      image = (
        <img
          className="food_Box__img"
          src={this.imageFood(item.img)}
          alt="true"
        />
      );
    } else {
      image = (
        <img
          className="food_Box__img nullImage"
          src="/img/fig-cart-empty.png"
          alt="true"
        />
      );
    }
    let showDiscount;
    if(this.state.activeDiscountshow == 'boxImageDiscount'){
      showDiscount=(
        <div>
            retetetete
        </div>
      )
    }else{
      showDiscount='';
    }

    const quantity = item.quantity || 0;
    let addBox;
    if (quantity) {
      addBox = (
        <React.Fragment>
          <span className="quantity">{quantity}</span>
          <button className="btn-minus" onClick={this.changeCount("remove")}>
            <img src="/img/remove.svg" alt="true" />
          </button>
        </React.Fragment>
      );
    }

    return (
      <div className="food_Box col-1-of-3" onMouseEnter={this.hoverfoodBox} onMouseLeave={this.hoverfoodOut}>
        <div className="desimg">
          <figure className={item.discountPercentage == 0 ? 'boxImage': this.state.activeDiscountshow}>{image}</figure>
          {showDiscount}
          <div className="description">
            { date < 20 ? <label className="unavailableText"><span >{item.unavailableText}</span></label> : ""}
            <div className="index">
              <h3>{item.title}</h3>
              <p>{truncate(item.ingredient)}</p>
            </div>
          </div>
        </div>
        <div className="last">
   
          <div className={className}>{currancy(item.price)}</div>
          {
            item.discountPercentage ? <div>{discountPrice(item.price,item.discountPercentage)}</div> : null }
          <div className="addBtn">
            <div className="quantity-holder">
              <button className="btn-plus" onClick={this.changeCount("add")}>
                <img src="/img/add.svg" alt="true" />
              </button>
              {addBox}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Food;
