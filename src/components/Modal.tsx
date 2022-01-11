import { TrackContext } from '../context/TrackContext';
import React from 'react';
import { useContext } from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export const Modal = () => {
	const {
		trackState: { displayInfo, infoTrack },
		setDisplayInfo,
	} = useContext(TrackContext);

	const { name, distance, maxElevation, time } = infoTrack;

	const handleModalDialogClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<>
			{displayInfo && (
				<div className="modal__overlay" onClick={() => setDisplayInfo(false)} />
			)}
			<div
				className={`modal ${displayInfo && 'modal--show'}`}
				onClick={handleModalDialogClick}
			>
				<div className="modal__header">
					<h2>Track Info</h2>
					<div style={{ fontSize: '1.4rem' }}>
						<BsFillInfoCircleFill />
					</div>
				</div>

				{name ? (
					<div className="modal__content">
						<p>
							<b>Name:</b> {name}
						</p>
						<p>
							<b>Distance:</b> {distance}
						</p>
						<p>
							<b>Max. Elevation:</b> {maxElevation}
						</p>
						<p>
							<b>Time:</b> {time}
						</p>
					</div>
				) : (
					<div className="modal__content">
						<p style={{ textAlign: 'center' }}>
							<strong>No Info 🙁</strong>
						</p>
					</div>
				)}
				<div className="modal__footer">
					<button onClick={() => setDisplayInfo(false)}>OK</button>
				</div>
			</div>
		</>
	);
};
