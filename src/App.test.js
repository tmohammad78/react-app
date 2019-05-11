import React from 'react';
import {configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Menu from './Component/Menu/Index';
configure({adapter:new Adapter()});
describe('<App/>', () => {
  it('should',()=>{
      const wrapper=shallow(<App/>);
      expect(wrapper.find(<Menu/>)).toHaveLength(1);
  });
})
