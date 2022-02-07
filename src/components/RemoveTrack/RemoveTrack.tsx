import { TrackContext } from '../../context/TrackContext';
import { useContext } from 'react';
import classNamesBind from 'classnames/bind';
import { AiTwotoneDelete } from 'react-icons/ai';

import common from '../../app.module.scss';
import styles from './styles.module.scss';

export const RemoveTrack = () => {
	const { deleteTrack, trackState } = useContext(TrackContext);

	const remove = classNamesBind({
		[common.buttons]: true,
		[styles.remove]: true,
	});

	const handleDeletion = () => {
		window.localStorage.removeItem('gpx');
		deleteTrack(!trackState.deleteTrack);
	};

	return (
		<button className={remove} onClick={handleDeletion} title="Eliminar Track">
			<AiTwotoneDelete />
		</button>
	);
};
