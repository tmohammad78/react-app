import React , { Component } from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';
import JSON from './data.json';
import FoodList from './FoodList';
// compo= ()=>{
//     fetch("https://api.delino.com/restaurant/menu/890d958f-9e64-4211-a2fa-d732c7a3920f")
//     .then
// }

class App extends Component {
    state = {
        foodList:JSON
    }
    render(){ 
        return (
            <div>
                <Header/>
                <FoodList food={this.state.foodList} />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#APP'));
