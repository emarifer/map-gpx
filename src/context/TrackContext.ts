import { createContext } from 'react';

export type InfoTrack = {
	name: string;
	distance: string;
	maxElevation: string;
	time: string;
};

export interface Track {
	data: string;
	location: boolean;
	deleteTrack: boolean;
	infoTrack: InfoTrack;
	displayInfo: boolean;
	userAccuracy: number;
}

export type TrackContexProps = {
	trackState: Track;
	// Methods:
	setTrack: (data: string) => void;
	setLocation: (Location: boolean) => void;
	deleteTrack: (deleteTrack: boolean) => void;
	setInfoTrack: (infoTrack: InfoTrack) => void;
	setDisplayInfo: (displayInfo: boolean) => void;
	setUserAccuracy: (userAccuracy: number) => void;
};

export const TrackContext = createContext<TrackContexProps>(
	{} as TrackContexProps,
);
