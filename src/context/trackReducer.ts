import { InfoTrack, Track } from './TrackContext';

type TrackAction =
	| { type: 'addTrack'; payload: string }
	| { type: 'startLocation'; payload: boolean }
	| { type: 'deleteTrack'; payload: boolean }
	| { type: 'setInfo'; payload: InfoTrack }
	| { type: 'setDisplay'; payload: boolean }
	| { type: 'setUserAccurcy'; payload: number };

export const trackReducer = (state: Track, action: TrackAction): Track => {
	switch (action.type) {
		case 'addTrack':
			return {
				...state,
				data: action.payload,
			};

		case 'startLocation':
			return {
				...state,
				location: action.payload,
			};

		case 'deleteTrack':
			return {
				...state,
				deleteTrack: action.payload,
				data: '',
				infoTrack: {} as InfoTrack,
			};

		case 'setInfo':
			return {
				...state,
				infoTrack: action.payload,
			};

		case 'setDisplay':
			return {
				...state,
				displayInfo: action.payload,
			};

		case 'setUserAccurcy':
			return {
				...state,
				userAccuracy: Math.round(action.payload * 100) / 100,
			};

		default:
			return state;
	}
};
