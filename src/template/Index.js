import React from 'react';
import serialize from 'serialize-javascript';

function Index({ renderedView, helmet, error }) {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  //   const schema = als.get('schema');
  const schema = false;
  // transfer data from server to client
  let dataTransfer;

  if (error) {
    dataTransfer = 'RSSR_PROCCESS_ERROR = true';
  }
  //
  //   const updatedState = als.get('updatedState');
  //   const dataExist = Object.getOwnPropertyNames(updatedState).length;
  //   if (dataExist) dataTransfer = 'RSSR_UPDATED_REDUX_STATES =' + serialize(updatedState);

  return (
    <html lang='fa' {...htmlAttrs}>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta
          http-equiv='Content-Security-Policy'
          content="default-src 'none'; connect-src 'self';font-src 'self'; img-src 'self' data: https:; style-src 'self' ; script-src 'self'"
        />
        <meta http-equiv='content-type' content='text/html; charset=UTF-8' />
        <link href='favicon.ico' rel='shortcut icon' type='image/x-icon' />
        <link rel='sitemap' type='application/xml' title='Sitemap' href='sitemap.xml' />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          href='https://cdn.glitch.com/49d34dc6-8fbd-46bb-8221-b99ffd36f1af%2Ftouchicon-180.png?v=1566411949736'
        />
        <meta name='theme-color' content='#FF7714' />
        <meta name='keywords' content='' />
        <meta name='og:title' property='og:title' content='Food Delivery' />
        <meta property='og:description' content='Food Delivery Site boilerplate' />
        <meta property='og:description' content='' />
        <meta property='og:image' content='' />ّ
        {/* <link rel='manifest' href='/manifest.json' /> */}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link rel='shortcut icon' href='/app-icon.png' type='image/png' />
        <link rel='stylesheet' href='/dist/styles.css' />
      </head>
      <body {...bodyAttrs}>
        <div id='root' dangerouslySetInnerHTML={{ __html: renderedView }}></div>
        {dataTransfer ? <script dangerouslySetInnerHTML={{ __html: dataTransfer }} /> : ''}

        <div id='modal-root' dangerouslySetInnerHTML={{ __html }}>
          ff
        </div>
        <script src='/dist/client.js'></script>
      </body>
    </html>
  );
}

export default Index;
