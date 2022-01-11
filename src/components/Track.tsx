/* eslint-disable camelcase */
import { InfoTrack, TrackContext } from '../context/TrackContext';
import { useContext, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-gpx/gpx';

const getInfoFromTrack = (gpx: L.GPX): InfoTrack => {
	const infoTrack = {} as InfoTrack;
	infoTrack.name = `${gpx.get_name()}`;
	infoTrack.distance = `${
		Math.round((gpx.get_distance() / 1000) * 100) / 100
	} km`;
	infoTrack.maxElevation = `${
		Math.round(gpx.get_elevation_max() * 100) / 100
	} m`;
	const hours = Math.round((gpx.get_total_time() / 3600000) * 100) / 100;
	const minutes = Math.ceil((hours - Math.floor(hours)) * 60);
	infoTrack.time = `${Math.floor(hours)} horas y ${minutes} minutos`;

	return infoTrack;
};

export const Track = () => {
	const map = useMap();

	const {
		trackState: { deleteTrack, data },
		setInfoTrack,
	} = useContext(TrackContext);

	useEffect(() => {
		const gpsData = window.localStorage.getItem('gpx') || '';
		const gpxLoaded: L.GPX = new L.GPX(gpsData, {
			async: true,
			marker_options: {
				wptIconUrls: {
					'': 'markers/pin-icon-wpt.png',
				},
				startIconUrl: 'markers/pin-icon-start.png',
				endIconUrl: 'markers/pin-icon-end.png',
				shadowUrl: 'markers/pin-shadow.png',
			},
		})
			.on('loaded', (e: L.LeafletEvent) => {
				const gpx = e.target as L.GPX;
				setInfoTrack(getInfoFromTrack(gpx));
				map.fitBounds(gpx.getBounds());
			})
			.addTo(map);

		return () => {
			map.removeLayer(gpxLoaded);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map, deleteTrack, data]);

	return null;
};
