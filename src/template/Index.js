import React from 'react';
import serialize from 'serialize-javascript';

function Index({ renderedView, helmet }) {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  //   const schema = als.get('schema');
  const schema = false;
  // transfer data from server to client
  //   let dataTransfer;
  //
  //   const updatedState = als.get('updatedState');
  //   const dataExist = Object.getOwnPropertyNames(updatedState).length;
  //   if (dataExist) dataTransfer = 'RSSR_UPDATED_REDUX_STATES =' + serialize(updatedState);

  return (
    <html lang='fa' {...htmlAttrs}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content='#c90065' />
        <link href='favicon.ico' rel='shortcut icon' type='image/x-icon' />
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
        <script src='/dist/client.js'></script>
      </body>
    </html>
  );
}

export default Index;
