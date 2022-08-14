import React, { createContext, useReducer } from 'react';
import { INITIAL_FILTERS } from 'helpers';
import { reducer } from './store/reducer';

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_FILTERS);

	return (
		<PlayersContext.Provider value={{ ...state, dispatch }}>
			{children}
		</PlayersContext.Provider>
	);
};
