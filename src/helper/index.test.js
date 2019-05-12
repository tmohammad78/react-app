import React from 'react';
import {configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({adapter:new Adapter()});
  it('should find menu',()=>{
      expect(currancy(12000)).to.equal(12000);
  });
//wrapper.setprops

