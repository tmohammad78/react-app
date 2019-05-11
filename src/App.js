import React, { Component } from "react";

import Header from "./Component/Header/index";
import Menu from "./Component/Menu/Index.js";
import Cart from "./Component/Cart";
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      foodList: [],
      show: false
    };
  }


  render() {
    return (
      <React.Fragment>
        <Cart show={this.state.show} />
        <Header
          ready={() => 
            this.setState({
              show: true
            }) 
          }
        />
        <Menu />
      </React.Fragment>
    );
  }
}

export default App;
