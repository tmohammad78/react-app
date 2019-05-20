import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/sass/main.scss";

const Main = () => {
  return <App />;
};

ReactDOM.render(<Main />, document.querySelector("#APP"));
