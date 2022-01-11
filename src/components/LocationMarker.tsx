import { TrackContext } from '../context';
import { useContext, useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import L from 'leaflet';

import icon from '/markers/marker-icon.png';
import iconShadow from '/markers/marker-shadow.png';

const DefaultIcon = L.icon({
	iconSize: [25, 40],
	iconAnchor: [12.5, -40],
	// popupAnchor: [12.5, -40],
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export const LocationMarker = () => {
	const {
		trackState: { location, userAccuracy },
		setUserAccuracy,
	} = useContext(TrackContext);

	const [position, setPosition] = useState<LatLng | null>(null);

	const map = useMap();

	useEffect(() => {
		location
			? map.locate({ watch: true, timeout: 5000 }).on('locationfound', (e) => {
				setPosition(e.latlng);
				setUserAccuracy(e.accuracy);
				// map.flyTo(e.latlng, map.getZoom());
			})
			: setPosition(null);

		return () => {
			map.stopLocate();
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location, map]);

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are less than {userAccuracy} meters</Popup>
		</Marker>
	);
};
