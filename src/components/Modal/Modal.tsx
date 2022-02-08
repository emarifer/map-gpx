import { TrackContext } from '../../context/TrackContext';
import { MouseEvent, useContext } from 'react';
import classNames from 'classnames/bind';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import styles from './styles.module.scss';

const classes = classNames.bind(styles);

export const Modal = () => {
	const {
		trackState: { displayInfo, infoTrack },
		setDisplayInfo,
	} = useContext(TrackContext);

	const { name, distance, maxElevation, time } = infoTrack;

	const handleModalDialogClick = (e: MouseEvent) => {
		e.stopPropagation();
	};

	const { overlay, modal, show, header, content, footer, button } = styles;

	const modalStatus = classes({
		[modal]: true,
		[show]: displayInfo,
	});

	return (
		<>
			{displayInfo && (
				<div className={overlay} onClick={() => setDisplayInfo(false)} />
			)}
			<div className={modalStatus} onClick={handleModalDialogClick}>
				<div className={header}>
					<h2>Track Info</h2>
					<div style={{ fontSize: '1.4rem' }}>
						<BsFillInfoCircleFill />
					</div>
				</div>

				{name ? (
					<div className={content}>
						<p>
							<b>Nombre:</b> {name}
						</p>
						<p>
							<b>Distancia:</b> {distance}
						</p>
						<p>
							<b>Max. Elevación:</b> {maxElevation}
						</p>
						<p>
							<b>Tiempo:</b> {time}
						</p>
					</div>
				) : (
					<div className={content}>
						<p style={{ textAlign: 'center' }}>
							<strong>Sin Información 🙁</strong>
						</p>
					</div>
				)}
				<div className={footer}>
					<button className={button} onClick={() => setDisplayInfo(false)}>
						OK
					</button>
				</div>
			</div>
		</>
	);
};
