import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'
import { shallow } from 'enzyme';

import Food from './Food';

describe('<Food />', ()=> {
  it('rendering Food',()=>{
    const wrapper=shallow(<Food/>);
    expect(wrapper.contains([
        <img src="/img/add.svg" />
    ])).to.have.equal(true);
  })
});