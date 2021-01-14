import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { skipWaiting, clientsClaim } from 'workbox-core';
//

// declare const self: Window & ServiceWorkerGlobalScope;
//
// let getVersionPort: any;
// let count = 0;
//
// // same channel as in App.tsx
// // if ('BroadcastChannel' in navigator) {
// // 	const broadcast = new BroadcastChannel('count-channel');
// // 	broadcast.onmessage = (event) => {
// // 		if (event.data && event.data.type === 'INCREASE_COUNT_BROADCAST') {
// // 			broadcast.postMessage({ payload: ++count });
// // 		}
// // 	};
// // }
//
//
// // self.addEventListener('message', (event: MessageEvent) => {
// // 	console.log('Scsdcscsccds');
// // 	if (event.data && event.data.type === 'INIT_PORT') {
// // 		[getVersionPort] = event.ports;
// // 	}
// //
// // 	if (event.data && event.data.type === 'INCREASE_COUNT_MESSAGE') {
// // 		getVersionPort.postMessage({ payload: ++count });
// // 	}
// //
// // 	if (event.data && event.data.type === 'INCREASE_COUNT_CLIENTS') {
// // 		self.clients.matchAll({ includeUncontrolled: true, type: 'window' }).then((clients: any) => {
// // 			if (clients && clients.length) {
// // 				clients[0].postMessage({ type: 'REPLY_COUNT_CLIENTS', count: ++count });
// // 			}
// // 		});
// // 	}
// //
// // 	if (event.data && event.data.type === 'SKIP_WAITING') {
// // 		skipWaiting();
// // 	}
// // });
//
// clientsClaim();
//
const precacheManifest = [].concat(self.__WB_MANIFEST || []);
precacheAndRoute(precacheManifest);
//
// const handler = createHandlerBoundToURL('/index.html');
// const navigationRoute = new NavigationRoute(handler, {
// 	denylist: [/^\/_/, /\/[^/?]+\.[^/]+$/]
// });
//
// self.addEventListener('install', () => {
// 	console.log('installed bitch ');
// });
// registerRoute(navigationRoute);
const CACHE_NAME = 'v1';
const urlsToCache = [
	'/static/css/app.css'
];
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => {
				return cache.addAll(urlsToCache);
			})
	);
});
// self.addEventListener('fetch', event => {
// 	event.repondWidth(
// 		caches.match(event.request)
// 			.then(response => {
// 				return response || fetch(event.request);
// 			})
// 	);
// });

self.addEventListener('activate', event => {
	console.log('activate');
});
self.addEventListener('push', event => {
	const title = 'title message';
	const body = 'we have received message';
	const icon = '/images/react.png';
	const tag = 'simple-push';
	event.waitUntil(
		self.registration.showNotification(title, {
			requireInteraction: true,
			body,
			icon,
			tag
		})
	);
});
