class Api {
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
}
export default new Api();
