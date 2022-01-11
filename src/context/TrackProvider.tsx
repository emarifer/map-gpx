import { useReducer } from 'react';
import { InfoTrack, Track, TrackContext } from './TrackContext';
import { trackReducer } from './trackReducer';

const INITIAL_STATE: Track = {
	data: '',
	location: false,
	deleteTrack: false,
	infoTrack: {} as InfoTrack,
	displayInfo: false,
	userAccuracy: 0,
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const TrackProvider = ({ children }: Props) => {
	const [trackState, dispatch] = useReducer(trackReducer, INITIAL_STATE);

	const setTrack = (data: string) => {
		dispatch({ type: 'addTrack', payload: data });
	};

	const setLocation = (location: boolean) => {
		dispatch({ type: 'startLocation', payload: location });
	};

	const deleteTrack = (deleteTrack: boolean) => {
		dispatch({ type: 'deleteTrack', payload: deleteTrack });
	};

	const setInfoTrack = (infoTrack: InfoTrack) => {
		dispatch({ type: 'setInfo', payload: infoTrack });
	};

	const setDisplayInfo = (displayInfo: boolean) => {
		dispatch({ type: 'setDisplay', payload: displayInfo });
	};

	const setUserAccuracy = (userAccuracy: number) => {
		dispatch({ type: 'setUserAccurcy', payload: userAccuracy });
	};

	return (
		<TrackContext.Provider
			value={{
				trackState,
				setTrack,
				setLocation,
				deleteTrack,
				setInfoTrack,
				setDisplayInfo,
				setUserAccuracy,
			}}
		>
			{children}
		</TrackContext.Provider>
	);
};
