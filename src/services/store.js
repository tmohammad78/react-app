import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newRootReducer from './reducers';

export default initialState => {
  initialState = JSON.parse(window.localStorage.getItem('state')) || initialState;
  console.log(initialState);
  const middleware = [thunk];
  let enhancer;
  if (process.env.NODE_ENV !== 'development') {
    enhancer = compose(applyMiddleware(...middleware));
  } else {
    enhancer = compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  const store = createStore(newRootReducer, initialState, enhancer);
  store.replaceReducer(newRootReducer); // for performance
  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total,
      likeFood: state.likeFood,
      auth: {
        token: state.auth.token,
        refreshToken: state.auth.refreshToken
      }
    };

    window.localStorage.setItem('state', JSON.stringify(persist));
  });
  return store;
};
