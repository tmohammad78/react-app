import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import Routes from "../client/Route/Routes";
import path from 'path';

import { ChunkExtractor } from '@loadable/server'

const statsFile = path.resolve('../../dist/loadable-stats.json')

const extractor = new ChunkExtractor({ statsFile })

export default (req: any, store: any, context: any) => {
	console.log("in rendering ", store.getState());

	const sheet = new ServerStyleSheet();
	const jsx = extractor.collectChunks(
		<StyleSheetManager sheet={sheet.instance} >
			<Provider store={store}>
				<StaticRouter location={req.path} context={context}>
					<div>{renderRoutes(Routes)}</div>
				</StaticRouter>
			</Provider>
		</StyleSheetManager>)
	const content = renderToString(
		jsx
	);

	const scriptTags = extractor.getScriptTags()
	const linkTags = extractor.getLinkTags()
	const styleTags = extractor.getStyleTags()

	const helmet = Helmet.renderStatic();
	sheet.seal()
	return `
	<!DOCTYPE html>
     <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
		<link rel="sitemap" type="application/xml" title="Sitemap" href="sitemap.xml" />
		<link rel="manifest" href="./manifest.json" />
		<link href="favicon.ico" rel="shortcut icon" type="image/x-icon" href='./favicon.ico' />
		<meta name="google-site-verification" content=""/>
		<link rel="stylesheet" href="/dist/app.fa.css"/>
		<link rel="apple-touch-icon" href="https://cdn.glitch.com/49d34dc6-8fbd-46bb-8221-b99ffd36f1af%2Ftouchicon-180.png?v=1566411949736">
		<meta name="theme-color" content="#FF7714"   />
		<meta name="keywords" content="" />
		<meta name="og:title" property="og:title" content="Food Delivery" />
		<meta property="og:description" content="Food Delivery Site boilerplate" />
		<meta property="og:description" content="" />
		<meta property="og:image" content="" />
		<title><%= htmlWebpackPlugin.options.title %></title>
		<style type="text/css">
		${linkTags}
		${styleTags}
		</head>
      <body>
		<div id="root">${content}</div>
		<div id="modal-root" ></div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
		<script src="/vendor.js" ></script>
		<script src="/bundle.js"></script>
		${scriptTags}
		</body>
    </html>
    `;
};

// ${bundles.map((bundle) => {
// 	return `<script src="/${bundle.file}" ></script>`
// }).join('\n')}