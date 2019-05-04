import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'
import { shallow } from 'enzyme';
import App from './App';
import Menu from '../src/Component/Menu';

describe('<App />', ()=> {
  it('rendering Food',()=>{
    const wrapper=shallow(<App/>);
    expect(wrapper.find(Menu)).to.have.equal(true);
  })
});