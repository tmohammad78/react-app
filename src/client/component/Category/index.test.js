// import React from 'react';
import { shallow ,render } from 'enzyme';
import Category from './index';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const initialState = {};

describe('mytest', () => {
  let component;
  beforeEach(() => {
    // const wrapper = shallow(<Category store={store} />);
    // let store = mockStore(initialState);

    let store = mockStore({
      myState: 'sample text'
    });
    component = render.create(
      <Provider store={store}>
        <Category />
      </Provider>
    );
  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
