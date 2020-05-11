
import Loadable from 'react-loadable';
import renderer from '../Helper/render';
import createStore from '../Helper/createStore';

export const renderServerSide = (req: any, res: any) => {
	Loadable.preloadAll()
		.then(() => createStore(req))
		.then((store) => renderer(store, req, res))
}