import { TrackContext } from '../context/TrackContext';
import { useContext } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';

export const RemoveTrack = () => {
	const { deleteTrack, trackState } = useContext(TrackContext);

	const handleDeletion = () => {
		window.localStorage.removeItem('gpx');
		deleteTrack(!trackState.deleteTrack);
	};

	return (
		<button
			title="Remove Track"
			onClick={handleDeletion}
			className="buttons buttons__remove"
		>
			<AiTwotoneDelete />
		</button>
	);
};
