import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { registerSW } from 'virtual:pwa-register';
import Swal from 'sweetalert2';

import './index.css';
import 'leaflet/dist/leaflet.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const updateSW = registerSW({
	onNeedRefresh() {
		Swal.fire({
			icon: 'info',
			title: 'New Content Available!!',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok, update it!',
		}).then((result) => {
			if (result.isConfirmed) {
				updateSW();
			}
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

/**
 * https://react-leaflet.js.org/docs/example-events/
 * https://github.com/PaulLeCam/react-leaflet/issues/520
 * https://codesandbox.io/s/reactjs-leaflet-place-marker-on-the-center-of-a-circlemarker-2hb38?file=/src/SimpleExample.jsx:329-397
 *
 * SERVICES WORKERS Y WEB WORKERS FUERTEMENTE TIPADOS CON TYPESCRIPT, VER:
 * https://joshuatz.com/posts/2021/strongly-typed-service-workers/
 *
 * AVANZADO (injectManifest) EN TYPESCRIPT. VER:
 * https://vite-plugin-pwa.netlify.app/guide/inject-manifest.html#advanced-injectmanifest
 */
