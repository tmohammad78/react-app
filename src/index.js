import React from 'react'; //JSX
import ReactDOM from 'react-dom'; //Render a React element into the DOM

const Test=()=>{
    // return 'mohammad'; // its for return just one tag and things or one section
    //  React.createElement('h1',{className:'title'},React.createElement('div',{className:'box-1'}));
    return ( //use ( ) for using alot element because return see just one element and use ClassName in react instead of class 
        <div className="newElement"> 
            <h1>hello react</h1>
            <div>Hey</div>
        </div>
    )
}
ReactDOM.render(<Test/>,document.querySelector('#APP'));  //render is method of reactDom  ,enter component


file2.js

export const name="mohammad";
export const pass="123"
export defualt "ok"


file1.js

import {name as username} from "file2";

import * as data from "file2"

data.namedata.pass

