import React from 'react';
import {configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Menu from './Component/Menu/Index';
import Cart from './Component/Cart/index';
import { expect } from 'chai';
configure({adapter:new Adapter()});
describe('<App/>', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper=shallow(<App/>);
  })
  it('should find menu',()=>{
      expect(wrapper.find(Menu));
      // wrapper.setState({id : 19300 });
      
  });
  it('for checking state',()=>{
    expect(wrapper.state().show).to.equal(false);
    // wrapper.setState({id : 19300 });
});
it('testing props',()=>{
const wrapper =shallow(<Cart show={true} />)
expect(wrapper.props().show).to.equal(true);
});
//wrapper.setprops
})
