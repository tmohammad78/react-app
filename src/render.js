import React from 'react';
import Root from './Root';
import Routs from './routes';
import ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { browserHistory } from './route/history';
import { StaticRouter } from 'react-router-dom';
import Index from './template/Index';

export const render = (error, req, res) => {
  let helmetContext = {};
  let view;
  if (!error) {
    view = (
      //   <Root>
      //     <StaticRouter history={browserHistory}>
      //       <HelmetProvider context={helmetContext}>
      //         <Routs />
      //       </HelmetProvider>
      //     </StaticRouter>
      //   </Root>
      ccc
    );
  } else {
    view = (
      <HelmetProvider context={helmetContext}>
        <Error error={error} />
      </HelmetProvider>
    );
  }

  // const viewModal = (

  // )

  const renderView = ReactDOMServer.renderToString(view);
  // const renderViewModa = ReactDOMServer.renderToString(viewModal);
  let response = <Index renderedView={renderView} helmet={helmetContext.helmet} error={error} />;
  // console.log('res ', response);
  response = ReactDOMServer.renderToString(response);
  response = '<!DOCTYPE html>' + response;

  if (typeof window !== 'undefined') {
    ReactDOM.render(App, document.getElementById('root'));
  } else {
    ReactDOM.hydrate(App);
  }
};
