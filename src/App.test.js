import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'
import { shallow } from 'enzyme';
import App from './App';
import Menu from './Component/Menu';

describe('<App />', ()=> {
  it('rendering Food',()=>{
    const wrapper=shallow(<App/>);
    expect(wrapper.find(Menu)).to.have.lengthOf(1);
  })
});