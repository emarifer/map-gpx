import {
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
			<h4>Camina 🥾 con mi App GPS</h4>
			<p>(React TS/React-Leaflet)</p>
			<div className="controls">
				<TrackLoader />
				<StartLocation />
				<RemoveTrack />
				<ShowInfo />
			</div>
		</header>
		<MapView />
		<Modal />
		<footer>
			MIT Licensed | Copyright © {Date().split(' ')[3]} Enrique Marín
		</footer>
	</TrackProvider>
);
