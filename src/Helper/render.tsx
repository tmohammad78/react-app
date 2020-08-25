import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
i
import { Helmet } from "react-helmet";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import Routes from "../client/Route/Routes";
import Html from './html';

export default (store: any, req: any, res: any) => {
	console.log("in rendering ", store.getState());
	const sheet = new ServerStyleSheet();
	const modules: string[] = [];
	const context = {};
	const content = renderToString(
		<Loadable.Capture report={moduleName => modules.push(moduleName)}>
			<Provider store={store}>
				<StyleSheetManager sheet={sheet.instance} >
					<StaticRouter location={req.path} context={context}>
						<div>{renderRoutes(Routes)}</div>
					</StaticRouter>
				</StyleSheetManager>
			</Provider>
		</Loadable.Capture>
	);

	sheet.seal();
	const Manifest: Bundle | undefined | any = JsonStatic ? JsonStatic : '';
	const fullApp = Html({
		helmet: Helmet.renderStatic(),
		store: store.getState(),
		bundles: getBundles(Manifest, modules),
		sheet,
		content
	})
	res.status(200).send(fullApp);
};
