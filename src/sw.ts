// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/* eslint-disable no-undef */
declare let self: ServiceWorkerGlobalScope;

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
// import { clientsClaim } from 'workbox-core';

registerRoute(
	/.*(www.ign.es\/wms-inspire|openstreetmap|opentopomap).*/,
	new CacheFirst({
		cacheName: 'cache-map',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 500, // Limitamos a 500 el número de recursos de ese directorio que queremos cachear.
				maxAgeSeconds: 24 * 60 * 60, // Tiempo de vida de la cache
			}),
		],
	}),
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

precacheAndRoute(self.__WB_MANIFEST);

/**
 * SERVICES WORKERS Y WEB WORKERS FUERTEMENTE TIPADOS CON TYPESCRIPT, VER:
 * https://joshuatz.com/posts/2021/strongly-typed-service-workers/
 *
 * AVANZADO (injectManifest) EN TYPESCRIPT. VER:
 * https://vite-plugin-pwa.netlify.app/guide/inject-manifest.html#advanced-injectmanifest
 */
