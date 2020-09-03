import { getAppEnv } from '../../webpack/env';
import serialize from 'serialize-javascript';
const env = getAppEnv();
const { NODE_ENV, PUBLIC_URL = '' } = env.raw;

let assetManifest: any;
if (NODE_ENV === 'production') {
  assetManifest = require('../../build/asset-manifest.json');
} else {
  assetManifest = {
    'main.js': '/main.bundle.js',
  };
}

interface test {
  helmet: any;
  store: any;
  extractor?: any;
  styleTags: any;
  content: string;
}

const Html = ({ helmet, store, extractor, styleTags, content }: test): string => {
  // const scriptTags = extractor.getScriptTags();
  // You can also collect your "preload/prefetch" links
  // const linkTags = extractor.getLinkTags();
  // const styleTagscss = extractor.getStyleTags();
  const htmlAttrs = helmet.htmlAttributes.toString();
  const bodyAttrs = helmet.bodyAttributes.toString();

  // console.log('in the html ', styleTagscss);
  console.log('after');
  console.log('content', content);

  return `
    <!doctype html>
    <html lang="en" ${htmlAttrs}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
		<link rel="sitemap" type="application/xml" title="Sitemap" href="sitemap.xml" />
		<link rel="manifest" href="./manifest.json" />
		<link href="favicon.ico" rel="shortcut icon" type="image/x-icon" href='./favicon.ico' />

		<link rel="stylesheet" href="/static/css/app.fa.css"/>
		<link rel="stylesheet" href="/dist/static/css/app.fa.css"/>
		<link rel="stylesheet" href="/dist/app.fa.css"/>
		<link rel="apple-touch-icon" href="https://cdn.glitch.com/49d34dc6-8fbd-46bb-8221-b99ffd36f1af%2Ftouchicon-180.png?v=1566411949736">
		
		<style type="text/css">
        ${helmet.link.toString()}
        ${helmet.style.toString()}
        ${helmet.noscript.toString()}
		 
        ${styleTags}
      </head>
      <body ${bodyAttrs}>
        <div id="root">${content}</div>
        <script>
          window.process = ${env.forIndexHtml};
          window.__INITIAL_STATE__ = ${serialize(store)}
          window.__ASSET_MANIFEST__ = ${JSON.stringify(assetManifest)}
		</script>
		<script>
		window.INITIAL_STATE = ${serialize(store)}
	  </script>
        <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
              }, function(err) {
                console.log('ServiceWorker registration failed: ', err);
              });
            });
          }
        </script>
        ${helmet.script.toString()}
        
      </body>
    </html>
  `;
};

export default Html;
// window.__SERVER_DATA__ = ${JSON.stringify(serverData)}
