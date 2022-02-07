import { TrackContext } from '../../context/TrackContext';
import { ChangeEvent, useContext, useRef } from 'react';
import classNamesBind from 'classnames/bind';
import { FaPaperclip } from 'react-icons/fa';

import common from '../../app.module.scss';
import styles from './styles.module.scss';

export const TrackLoader = () => {
	const label = classNamesBind({
		[common.buttons]: true,
		[styles.label]: true,
	});

	const { setTrack } = useContext(TrackContext);
	const inputRef = useRef<HTMLInputElement>(null);

	const resetFileUploader = () => {
		if (inputRef.current) inputRef.current.value = '';
	};

	const openfile = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target;
		const reader = new FileReader();
		reader.onload = () => {
			const data = reader.result as string;
			setTrack(data);
			window.localStorage.setItem('gpx', data);
			// console.log(data);
		};

		if (input.files) reader.readAsText(input.files[0]);
	};

	return (
		<>
			<label className={label} htmlFor="input-track" title="Añadir Track">
				<FaPaperclip />
			</label>
			<input
				accept="application/gpx+xml"
				className={styles.input}
				id="input-track"
				onChange={openfile}
				onClick={resetFileUploader}
				ref={inputRef}
				type="file"
			/>
		</>
	);
};
