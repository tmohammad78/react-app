import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const Config = require('../../webpack/webpack.dev');

export const applyDevMiddleware = (app: any): void => {
  console.log('app', app);

  const compiler = webpack(Config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
      serverSideRender: true,
    })
  );

  app.use(
    webpackHotMiddleware(
      (compiler as any).compilers.find((compiler: any) => compiler.name === 'client'),
      {
        path: '/__webpack_hmr',
        heartbeat: 4000,
      }
    )
  );
};
