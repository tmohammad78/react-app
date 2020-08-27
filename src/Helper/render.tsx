import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import path from 'path';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
//@ts-ignore
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

import Routes from '../client/Route/Routes';
import Html from './html';
const statsFile = path.resolve('build/loadable-stats.json');
export default (store: any, req: any, res: any) => {
  const extractor = new ChunkExtractor({ statsFile });
  const sheet = new ServerStyleSheet();
  const context = {};
  console.log(extractor.getStyleTags());
  try {
    const content = renderToString(
      <ChunkExtractorManager extractor={extractor}>
        <Provider store={store}>
          <StyleSheetManager sheet={sheet.instance}>
            <StaticRouter location={req.path} context={context}>
              <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
          </StyleSheetManager>
        </Provider>
      </ChunkExtractorManager>
    );
    const styleTags = sheet.getStyleTags();
    const fullApp = Html({
      helmet: Helmet.renderStatic(),
      store: store.getState(),
      extractor,
      styleTags,
      content,
    });
    res.status(200).send(fullApp);
  } catch (err) {
    console.log('err in the render to strign', err);
  } finally {
    sheet.seal();
  }
};
