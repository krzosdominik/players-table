import { useContext } from 'react';

// Import context
import { PlayersContext } from './PlayersProvider';

export const usePlayersContext = () => {
	const context = useContext(PlayersContext);
	return context;
};
