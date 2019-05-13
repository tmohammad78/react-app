import React, { Component } from "react";
import Header from "./Component/Header/index";
import Menu from "./Component/Menu/Index.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [],
      show: false
    };
  }
  handeler = () => {
    this.setState.show = false;
  };
  render() {
    return (
      <React.Fragment>
        <Header
          ready={() =>
            this.setState({
              show: true
            })
          }
        />
        <Menu
          show={this.state.show}
          testing={this.handeler}
          onPress={() => {
            console.log("before", this.state.show);
            this.setState(
              {
                show: false
              },
              () => {
                console.log("after", this.state.show);
              }
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
