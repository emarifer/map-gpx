import { TrackContext } from '../context/TrackContext';
import { ChangeEvent, useContext, useRef } from 'react';
import { FaPaperclip } from 'react-icons/fa';

export const TrackLoader = () => {
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
			<label className="buttons buttons__label" htmlFor="input-track">
				<FaPaperclip />
			</label>
			<input
				ref={inputRef}
				type="file"
				accept="application/gpx+xml"
				id="input-track"
				onClick={resetFileUploader}
				onChange={openfile}
			/>
		</>
	);
};
