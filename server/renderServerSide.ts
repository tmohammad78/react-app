import renderer from '../src/Helper/render';
import createStore from '../src/Helper/createStore';

export const renderServerSide = (req: any, res: any) => {
 
  const store = createStore(res);
  return renderer(store, req, res);
  //   Loadable.preloadAll()
  //     .then(() => createStore(req))
  //     .then((store) => renderer(store, req, res));
};
