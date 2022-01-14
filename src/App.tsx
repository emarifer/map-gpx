import {
	DeleteCache,
	MapView,
	Modal,
	RemoveTrack,
	ShowInfo,
	StartLocation,
	TrackLoader,
} from './components';
import { TrackProvider } from './context';

import './app.css';

export const App = () => (
	<TrackProvider>
		<header>
			<h4>Camina 🥾 con mi App GPS | .env</h4>
			<p>(PWA - React TS/React-Leaflet)</p>
			<div className="controls">
				<TrackLoader />
				<StartLocation />
				<RemoveTrack />
				<ShowInfo />
				<DeleteCache />
			</div>
		</header>
		<MapView />
		<Modal />
		<footer>
			MIT Licensed | Copyright © {Date().split(' ')[3]} Enrique Marín
		</footer>
	</TrackProvider>
);
