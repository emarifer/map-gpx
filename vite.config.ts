/* eslint-disable new-cap */
/* eslint-disable camelcase */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default ({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

	return defineConfig({
		base:
			process.env.NODE_ENV === 'production'
				? `${process.env.BASE_URL}`.length === 0 || !process.env.BASE_URL
					? '/'
					: `/${process.env.BASE_URL}/` // prod
				: '/', // dev,
		plugins: [
			react(),
			VitePWA({
				strategies: 'injectManifest',
				srcDir: 'sw',
				filename: 'sw.ts',
				// registerType: 'autoUpdate',
				includeAssets: [
					'img/favicon.svg',
					'robots.txt',
					'fonts/ubuntu.woff2',
					'icons/apple-touch-icon.png',
					'icons/android-chrome-192x192.png',
					'icons/android-chrome-512x512.png',
					'markers/pin-icon-end.png',
					'markers/pin-icon-start.png',
					'markers/pin-icon-wpt.png',
					'markers/pin-shadow.png',
					'markers/marker-icon.png',
					'markers/marker-icon-2x.png',
					'markers/marker-shadow.png',
				],
				manifest: {
					name: 'Camina 🥾 con mi App GPS',
					short_name: 'Map GPX App',
					description: 'App GPS con React-Leaflet & TS',
					theme_color: '#2377ff',
					background_color: '#2377ff',
					icons: [
						{
							src: 'icons/apple-touch-icon.png',
							sizes: '180x180',
							type: 'image/png',
						},
						{
							src: 'icons/android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'icons/android-chrome-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
					],
					start_url: '.',
					// scope: 'https://emarifer.github.io/test-vite/',
					display: 'standalone',
				},
			}),
		],
	});
};
