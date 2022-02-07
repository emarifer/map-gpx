import { TrackContext } from '../../context/TrackContext';
import { useContext } from 'react';
import classNames from 'classnames/bind';
import { FaMapMarkerAlt } from 'react-icons/fa';

import common from '../../app.module.scss';
import styles from './styles.module.scss';

const classes = classNames.bind(styles);

export const StartLocation = () => {
	const { setLocation, trackState } = useContext(TrackContext);

	const geoLocation = classes({
		[common.buttons]: true,
		[styles.location]: true,
		[styles.active]: trackState.location,
	});

	const handleLocation = () => setLocation(!trackState.location);

	return (
		<button
			className={geoLocation}
			onClick={handleLocation}
			title="Iniciar Geolocalización"
		>
			<FaMapMarkerAlt />
		</button>
	);
};
