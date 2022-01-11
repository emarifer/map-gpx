import { LocationMarker, MapLayers, Track } from '.';
import { MapContainer, ScaleControl } from 'react-leaflet';

export const MapView = () => {
	const bounds: [number, number][] = [
		[24.9300000311, -19.6],
		[46.0700000311, 5.6],
	];

	return (
		<MapContainer bounds={bounds}>
			{window.localStorage.getItem('gpx')?.length === 0 ? null : <Track />}
			<LocationMarker />
			<ScaleControl />
			<MapLayers />
		</MapContainer>
	);
};
