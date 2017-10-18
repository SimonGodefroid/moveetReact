const initialState = {
	movies: []
};

export default function auth(state = initialState, action) {
	if (!state.hydrated) {
		state = Object.assign({}, initialState, state, { hydrated: true });
	}
	switch (action.type) {
		case 'FETCH_MOVIES_SUCCESS':
			return Object.assign({}, state, {
				movies: action.movies
			});
		case 'FETCH_MOVIES_FAILURE':
			return initialState;
		default:
			return state;
	}
}
