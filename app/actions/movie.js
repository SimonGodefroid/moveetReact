export function getMoviesByGenre(genre) {
	return dispatch => {
		dispatch({
			type: 'CLEAR_MESSAGES'
		});
		return fetch(`http://moveetservertest.herokuapp.com/api/movies/?genre=${genre}`, {
			method: 'get',
			headers: { 'Content-Type': 'application/json' }
		}).then(response => {
			if (response.ok) {
				return response.json().then(json => {
					dispatch({
						type: 'FETCH_MOVIES_SUCCESS',
						movies: json.movies,
						messages: [json]
					});
				});
			} else {
				return response.json().then(json => {
					dispatch({
						type: 'FETCH_MOVIES_FAILURE',
						messages: Array.isArray(json) ? json : [json]
					});
				});
			}
		});
	};
}
