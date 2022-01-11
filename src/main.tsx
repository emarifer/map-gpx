import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';

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
 */
