import React, { Component } from "react";

import Header from "./Header";
import axios from "axios";
import Menu from "./Component/Menu/Index.js";
class App extends Component {
  state = {
    foodList: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.delino.com/restaurant/menu/890d958f-9e64-4211-a2fa-d732c7a3920f`
      )
      .then(res => {
        const foodList = res.data.categories;
        this.setState({ foodList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.foodList);
    return (
      // <Headr />
          <Menu Food={}/>
      // <Footer />
    );
  }
}

export default App;
