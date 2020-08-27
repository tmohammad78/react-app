import { applyMiddleware, createStore, Store as ReduxStore, Action as ReduxAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import newRootReducer from '../client/Redux/reducers';
import instance from '../API/api';
export type Action<T extends string = string, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{ payload: P }>;
export type Dispatch = ThunkDispatch<State, void, Action>;
export type State = {};
type Store = ReduxStore<State, Action> & {
  dispatch: Dispatch;
};
export default (req: any) => {
  // const axiosInstance = axios.create({
  // 	baseURL: "http://react-ssr-api.herokuapp.com",
  // 	headers: { cookie: req.get("cookie") || "" },
  // });
  const store: Store = createStore(
    newRootReducer,
    applyMiddleware(thunk.withExtraArgument(instance))
  );
  console.log('in create store ', store);
  return store;
};
