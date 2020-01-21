// import React from 'react';
// import {Provider} from 'react-redux'
// import { mount, shallow } from 'enzyme'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk';
// import Root from './Root.js';

// const mockStore = configureMockStore([thunk]);

// describe('Root', () => {
//   it('should render a startup component if startup is not complete', () => {
//     const store = mockStore({
//       startup: { complete: false }
//     });
//     const wrapper = mount(
//       <Provider store={store}>
//         <Root />
//       </Provider>
//     )
//     expect(wrapper.find('Startup').length).toEqual(1)
//   })
// })