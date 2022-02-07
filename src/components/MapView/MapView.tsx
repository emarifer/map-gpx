import { LocationMarker, MapLayers, Track } from '..';
import { MapContainer, ScaleControl } from 'react-leaflet';

import styles from './styles.module.scss';

export const MapView = () => {
	const bounds: [number, number][] = [
		[24.9300000311, -19.6],
		[46.0700000311, 5.6],
	];

	const { leafletContainer } = styles;

	return (
		<MapContainer bounds={bounds} className={leafletContainer}>
			{window.localStorage.getItem('gpx')?.length === 0 ? null : <Track />}
			<LocationMarker />
			<ScaleControl />
			<MapLayers />
		</MapContainer>
	);
};
