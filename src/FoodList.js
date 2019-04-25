  import React from 'react';


const FoodList =(props)=>{
    console.log(props.food.categories);
    const items = props.food.categories.map((item)=>{
        return (
            <div>
                {item.title}
            </div>
        )
    });
    return (
        // <div>{props}</div>
        <div>{items}</div>
    )
}
export default FoodList;