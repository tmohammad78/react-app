import React from 'react';
import serialize from 'serialize-javascript';

function Index({ renderedView, helmet }) {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  const schema = als.get('schema');

  // transfer data from server to client
  let dataTransfer;

  const updatedState = als.get('updatedState');
  const dataExist = Object.getOwnPropertyNames(updatedState).length;
  if (dataExist) dataTransfer = 'RSSR_UPDATED_REDUX_STATES =' + serialize(updatedState);

  return (
    <html lang='fa' {...htmlAttrs}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta
          http-equiv='Content-Security-Policy'
          content="img-src 'self' data:; default-src 'self' http://XX.XX.XX.XX:8084/mypp/"
        />
        <meta name='theme-color' content='#c90065' />
        
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
		<link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<link rel="sitemap" type="application/xml" title="Sitemap" href="sitemap.xml" />
		<link rel="manifest" href="./manifest.json" />

		<meta name="google-site-verification" content=""/>
		<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'" />
		<meta http-equiv="Content-Security-Policy" content="img-src 'self' data:; default-src 'self' http://XX.XX.XX.XX:8084/mypp/"/>
		<link rel="apple-touch-icon" href="https://cdn.glitch.com/49d34dc6-8fbd-46bb-8221-b99ffd36f1af%2Ftouchicon-180.png?v=1566411949736"/>
		<meta name="theme-color" content="#FF7714"   />
		<meta name="keywords" content="" />

		<meta name="og:title" property="og:title" content="Food Delivery" />
		<meta property="og:description" content="Food Delivery Site boilerplate" />
		<meta property="og:description" content="" />
		<meta property="og:image" content="" />
		<link rel='manifest' href='/manifest.json' />
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link rel='stylesheet' href='/dist/styles.css' />
      </head>
      <body {...bodyAttrs}>
        <div id='root' dangerouslySetInnerHTML={{ __html: renderedView }}></div>
        {dataTransfer ? <script dangerouslySetInnerHTML={{ __html: dataTransfer }} /> : ''}
        {schema ? (
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: serialize(schema) }}
          ></script>
        ) : (
          ''
        )}
        <script src='/dist/client.js'></script>
      </body>
    </html>
  );
}

export default Index;
