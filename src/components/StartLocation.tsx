import { TrackContext } from '../context/TrackContext';
import { useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const StartLocation = () => {
	const { setLocation, trackState } = useContext(TrackContext);

	const handleLocation = () => setLocation(!trackState.location);

	return (
		<button
			title="Geolocation"
			onClick={handleLocation}
			className={`buttons buttons__location ${
				trackState.location && 'buttons__location--active'
			}`}
		>
			<FaMapMarkerAlt />
		</button>
	);
};
