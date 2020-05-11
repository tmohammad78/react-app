import { getAppEnv } from '../../webpack/env';
import serialize from 'serialize-javascript';
const env = getAppEnv();
import { Bundle } from 'react-loadable/webpack';
const { NODE_ENV, PUBLIC_URL = '' } = env.raw;

let assetManifest: any;
if (NODE_ENV === 'production') {
	assetManifest = require('../../build/asset-manifest.json');
} else {
	assetManifest = {
		'main.js': '/main.bundle.js'
	};
}

const prefetchStyleLinks = (bundles: Bundle[]) => {
	if (NODE_ENV !== 'production') {
		return '';
	}

	const assetFilePaths = Object.keys(assetManifest)
		.filter(
			file =>
				file !== 'main.css' &&
				file.match(/\.css$/) &&
				!bundles.find(b => b.publicPath === assetManifest[file])
		)
		.map(cssFile => `${PUBLIC_URL}${assetManifest[cssFile]}`);

	return assetFilePaths
		.map(
			cssFilePath => `<link rel="prefetch" as="style" href="${cssFilePath}">`
		)
		.join('');
};

const cssLinks = (bundles: Bundle[]) => {
	if (NODE_ENV !== 'production') {
		return '';
	}

	const mainCSS = assetManifest['main.css'];
	const bundleFilePaths = bundles
		.filter(bundle => bundle.file.match(/\.css$/))
		.map(cssBundle => `${PUBLIC_URL}/${cssBundle.file}`);

	return [mainCSS, ...bundleFilePaths]
		.map(cssFilePath => `<link rel="stylesheet" href="${cssFilePath}">`)
		.join('');
};

const preloadScripts = (bundles: Bundle[]) => {
	const mainJS = assetManifest['main.js'];
	const bundleFilePaths = bundles
		.filter(bundle => bundle.file.match(/\.js$/))
		.map(jsBundle => `${PUBLIC_URL}/${jsBundle.file}`);

	return [...bundleFilePaths, mainJS]
		.map(jsFilePath => `<link rel="preload" as="script" href="${jsFilePath}">`)
		.join('');
};

const jsScripts = (bundles: Bundle[]) => {
	const mainJS = assetManifest['main.js'];
	const bundleFilePaths = bundles
		.filter(bundle => bundle.file.match(/\.js$/))
		.map(jsBundle => `${PUBLIC_URL}/${jsBundle.file}`);

	return [...bundleFilePaths, mainJS]
		.map(
			jsFilePath =>
				`<script type="text/javascript" src="${jsFilePath}" defer></script>`
		)
		.join('');
};
interface test {
	helmet: any,
	store: any,
	bundles: Bundle[],
	sheet: any,
	content: string
}

const Html = ({ helmet, store, bundles, sheet, content }: test): string => {
	const htmlAttrs = helmet.htmlAttributes.toString();
	const bodyAttrs = helmet.bodyAttributes.toString();
	console.log('in html', store);

	const styleTags = sheet.getStyleTags();
	console.log('styleTags', styleTags);
	sheet.seal();
	return `
    <!doctype html>
    <html lang="en" ${htmlAttrs}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
		<link rel="sitemap" type="application/xml" title="Sitemap" href="sitemap.xml" />
		<link rel="manifest" href="./manifest.json" />
		<link href="favicon.ico" rel="shortcut icon" type="image/x-icon" href='./favicon.ico' />

		<link rel="stylesheet" href="/static/css/app.fa.css"/>
		<link rel="stylesheet" href="/dist/static/css/app.fa.css"/>
		<link rel="stylesheet" href="/dist/app.fa.css"/>

		<link rel="apple-touch-icon" href="https://cdn.glitch.com/49d34dc6-8fbd-46bb-8221-b99ffd36f1af%2Ftouchicon-180.png?v=1566411949736">

		<style type="text/css">
        
        ${prefetchStyleLinks(bundles)}
        ${helmet.link.toString()}
        ${cssLinks(bundles)}
        ${helmet.style.toString()}

        ${helmet.noscript.toString()}
        ${preloadScripts(bundles)}
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
		window.INITIAL_STATE = ${serialize(store.getState())}
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
        ${jsScripts(bundles)}
      </body>
    </html>
  `;
};

export default Html;
// window.__SERVER_DATA__ = ${JSON.stringify(serverData)}
