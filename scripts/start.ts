process.env.NODE_ENV = 'development';
process.env.PUBLIC_URL = process.env.PUBLIC_URL || '';

import chalk from 'chalk';
import express from 'express';
import openBrowser from 'react-dev-utils/openBrowser';
import { choosePort, prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import { applyDevMiddleware } from './utils/devMiddleware';
import { app } from '../server/server';
import { renderServerSide } from '../server/renderServerSide';

const DEFAULT_PORT: number = parseInt(process.env.PORT ? process.env.PORT : '') || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const server = express();
import renderer from '../src/Helper/render';
applyDevMiddleware(server);

// server.use((req: any, res: any) => {
//   app(req, res);
// });
server.use((req: any, res: any) => {
  // renderServerSide(req,res)
  renderer(req, res);
});

choosePort(HOST, DEFAULT_PORT).then((port: any) => {
  if (!port) {
    return;
  }
  const urls = prepareUrls('http', HOST, port);
  server.listen(port, HOST, (err: any) => {
    if (err) {
      return console.log(err);
    }
    console.log(chalk.white('\n\tStarting dev server...'));
    openBrowser(urls.localUrlForBrowser);
    // purgeCacheOnChange(path.resolve(__dirname, '../'));
    console.log(
      chalk.blue(`
        Running locally at ${urls.localUrlForBrowser}
        Running on your network at ${urls.lanUrlForConfig}:${port}
      `)
    );
  });
});
