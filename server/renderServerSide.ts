
import Loadable from 'react-loadable';
import renderer from '../src/Helper/render';
import createStore from '../src/Helper/createStore';

export const renderServerSide = (req: any, res: any) => {
	Loadable.preloadAll()
		.then(() => createStore(req))
		.then((store) => renderer(store, req, res))
}