import React, { Component } from "react";

import Header from "./Header";
import Menu from "./Component/Menu/Index.js";
class App extends Component {
  state = {
    foodList: []
  };

  render() {
    console.log(this.state.foodList);
    return (
      // <Headr />
          <Menu />
      // <Footer />
    );
  }
}

export default App;
