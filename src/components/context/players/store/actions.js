import * as types from './types';

export const setSize = (payload) => (dispatch) => {
	dispatch({ type: types.SET_SIZE, payload });
};

export const setPage = (payload) => (dispatch) => {
	dispatch({ type: types.SET_PAGE, payload });
};

export const setSearchBy = (payload) => (dispatch) => {
	dispatch({ type: types.SET_SEARCH_BY, payload });
};

export const setSort = (payload) => (dispatch) => {
	dispatch({ type: types.SET_SORT, payload });
};

export const setSortDir = (payload) => (dispatch) => {
	dispatch({ type: types.SET_SORT_DIR, payload });
};
