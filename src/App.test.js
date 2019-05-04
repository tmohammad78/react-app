// import React, { Component } from "react";
// import Enzyme from 'enzyme';
// import Adaptar from 'enzyme-adapter-react-16';

// import Header from "./Header";
// import Menu from "./Component/Menu/Index.js";
// class App extends Component {
//   state = {
//     foodList: []
//   };

//   render() {
//     return (
//       // <Headr />
//           <Menu />
//       // <Footer />
//     );
//   }
// }

// export default App;

import react from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'ch'
import { shallow } from 'enzyme';
import App from './App';

describe('<App/>',()=>{
  const wrapper=shallow(<App/>);

});