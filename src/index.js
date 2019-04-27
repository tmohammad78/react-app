import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import '../src/sass/base/base.scss';
import '../src/sass/abstracts/mixin.scss';
const Main = ()=>{
    return(
        <App/>
    )
}

ReactDOM.render(<Main/>,document.querySelector('#APP'));
