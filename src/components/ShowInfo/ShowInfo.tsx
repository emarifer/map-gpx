import { TrackContext } from '../../context/TrackContext';
import { useContext } from 'react';
import classNamesBind from 'classnames/bind';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import common from '../../app.module.scss';
import styles from './styles.module.scss';

export const ShowInfo = () => {
	const { setDisplayInfo } = useContext(TrackContext);

	const info = classNamesBind({
		[common.buttons]: true,
		[styles.info]: true,
	});

	return (
		<button
			className={info}
			onClick={() => setDisplayInfo(true)}
			title="Info Track"
		>
			<BsFillInfoCircleFill />
		</button>
	);
};
