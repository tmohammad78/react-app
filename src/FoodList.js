  import React from 'react';
  import Category from './categoryItems';

const FoodList =(props)=>{
    console.log(props.food.categories);
    const items = props.food.categories.map((item)=>{
        return (
            <div>
                <Category  item={item}/>
            </div>
        )
    });
    return (
        // <div>{props}</div>
        <div>{items}</div>
    )
}
export default FoodList;