import React, { Component } from "react";

import Header from "./Header";
import Menu from "./Component/Menu/Index.js";
class App extends Component {
  state = {
    foodList: []
  };

  render() {
    return (
      // <Headr />
      <React.Fragment>
        <Header />
        <Menu />
      </React.Fragment>

      // <Footer />
    );
  }
}

export default App;
