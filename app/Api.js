class Api {
	getMoviesByGenre(callback, genre) {
		fetch('http://moveetservertest.herokuapp.com/api/movies/?genre=' + genre)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getBuddies(callback) {
		fetch('http://moveetservertest.herokuapp.com/api/user/all')
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
}
export default new Api();
