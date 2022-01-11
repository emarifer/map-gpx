import { TrackContext } from '../context/TrackContext';
import { useContext } from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export const ShowInfo = () => {
	const { setDisplayInfo } = useContext(TrackContext);

	return (
		<button
			title="Track Info"
			onClick={() => setDisplayInfo(true)}
			className="buttons buttons__info"
		>
			<BsFillInfoCircleFill />
		</button>
	);
};
