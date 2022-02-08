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
import { BsGithub } from 'react-icons/bs';

import styles from './app.module.scss';

export const App = () => (
	<TrackProvider>
		<header>
			<h4>Camina 🥾 con mi App GPS</h4>
			<p>
				(PWA - React+TS/React-Leaflet)
				<a
					href="https://github.com/emarifer/map-gpx/tree/added_css_modules"
					rel="noopener noreferrer"
					target="_blank"
					title="Mi GitHub"
				>
					<BsGithub />
				</a>
			</p>
			<div className={styles.controls}>
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
			MIT Licensed | Copyright © {new Date().getFullYear()} Enrique Marín
		</footer>
	</TrackProvider>
);
