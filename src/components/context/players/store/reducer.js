import * as types from './types';
import produce from 'immer';

export const reducer = (state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case types.SET_SIZE:
				draft.size = action.payload;
				break;

			case types.SET_PAGE:
				draft.page = action.payload;
				break;

			case types.SET_SEARCH_BY:
				draft.searchBy = action.payload;
				break;

			case types.SET_SORT:
				draft.sort = action.payload;
				break;

			case types.SET_SORT_DIR:
				draft.sortDir = action.payload;
				break;

			default:
				return state;
		}
	});
