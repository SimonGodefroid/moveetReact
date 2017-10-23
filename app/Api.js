class Api {
	getAllMovies(callback) {
		console.log('https://moveet-api.herokuapp.com/api/v1/movies');
		fetch('https://moveet-api.herokuapp.com/api/v1/movies')
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getMoviesByGenre(callback, genre) {
		console.log('https://moveet-api.herokuapp.com/api/v1/movies?genreListSimon=' + genre);
		fetch('https://moveet-api.herokuapp.com/api/v1/movies?genreListSimon=' + genre)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getBuddies(callback) {
		fetch('https://moveet-api.herokuapp.com/api/v1/users')
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	toggleFavorite(callback, user, movie) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/users/${user}/favorites/${movie}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${user}/favorites/${movie}`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
		})
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
}
export default new Api();
