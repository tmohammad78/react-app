import React from 'react';

const categoryItems =({item}) =>{ //this is like react.component that we import just component
    // console.log(props);
        return(
            <div>
                {item.title}
            </div>
        )
    
}
export default categoryItems;