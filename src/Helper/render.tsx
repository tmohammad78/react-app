import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Loadable from 'react-loadable';
import { Helmet } from "react-helmet";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { getBundles, Bundle } from 'react-loadable/webpack';
import Routes from "../client/Route/Routes";
import { ChunkExtractor } from '@loadable/server'

// @ts-ignore
import JsonStatic from '../../build/react-loadable.json';
// @ts-ignore
import Html from './html';

interface Itest {
	JsonStatic?: any
}
export default (store: any, req: any, res: any) => {
	// @ts-ignore
	const extractor = new ChunkExtractor({ JsonStatic })
	console.log(extractor)
	const sheet = new ServerStyleSheet();
	const modules: string[] = [];
	const context = {};
	const extractorNew = extractor(sheet.collectStyles(
		// <Loadable.Capture report={moduleName => modules.push(moduleName)}>
		<Provider store={store}>
			{/* <StyleSheetManager sheet={sheet.instance} > */}
			<StaticRouter location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
			{/* </StyleSheetManager> */}
		</Provider>
		// </Loadable.Capture>
	))
	const content = renderToString(
		extractorNew
	);

	const Manifest: Bundle | undefined | any = JsonStatic ? JsonStatic : '';
	const fullApp = Html({
		helmet: Helmet.renderStatic(),
		extractor,
		store: store,
		bundles: getBundles(Manifest, modules),
		sheet,
		content
	})
	res.status(200).send(fullApp);
};
