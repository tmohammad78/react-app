import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Routes from "../client/Route/Routes";
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import path from 'path';
import Html from './html';

// @ts-ignore
import statsFile from '../../build/react-loadable.json'
const statsFile2 = path.resolve(
	__dirname,
	'../../dist/loadable-stats.json',
)
const statsFile = path.resolve(
	__dirname,
	'../../build/loadable-stats.json',
)
// @ts-ignore

export default (store?: any, req?: any, res?: any) => {

	// console.log('dd', statsFile);
	// @ts-ignore
	const extractor = new ChunkExtractor({ statsFile })
	// console.log('extractor', extractor)
	const sheet = new ServerStyleSheet();
	const context = {};
	//
	const extractorNew =  extractor.collectChunks(sheet.collectStyles(
		<Provider store={store}>
			<StyleSheetManager sheet={sheet.instance} >
				<StaticRouter location={req.path} context={context}>
					<div>{renderRoutes(Routes)}</div>
				</StaticRouter>
			</StyleSheetManager>
		</Provider>
	))
	const content = renderToString(
		extractorNew
	);

	const fullApp = Html({
		helmet: Helmet.renderStatic(),
		extractor,
		store: store,
		sheet,
		content
	})
	res.status(200).send(fullApp);
};
