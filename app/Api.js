class Api {
	//////////////////////////////////////////////////
	// Movies methods ////////////////////////////////
	//////////////////////////////////////////////////
	getAllMovies(callback) {
		console.log('https://moveet-api.herokuapp.com/api/v1/movies');
		fetch('https://moveet-api.herokuapp.com/api/v1/movies')
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getMovieById(callback, movieid) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/movies/${movieid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/movies/${movieid}`)
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
	//////////////////////////////////////////////////
	// Users methods /////////////////////////////////
	//////////////////////////////////////////////////
	getAllBuddies(callback, userid) {
		fetch(`https://moveet-api.herokuapp.com/api/v1/buddies/${userid}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getMatches(callback, userid) {
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/matches`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	findBuddy(callback, userid, movieid) {
		console.log('$FIND BUDDY URL', `https://moveet-api.herokuapp.com/api/v1/users/${userid}/findbuddy/${movieid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/findbuddy/${movieid}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	//////////////////////////////////////////////////
	// Favorites methods /////////////////////////////
	//////////////////////////////////////////////////
	toggleFavorite(callback, userid, movieid) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/favorites/${movieid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/favorites/${movieid}`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
		})
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getUserFavoriteMovies(callback, userid) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/favorites`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/favorites`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	//////////////////////////////////////////////////
	// Showtimes methods /////////////////////////////
	//////////////////////////////////////////////////
	getMovieShowtimes(callback, user, moviecode, zipcode) {
		let lat = !user.account.location.coordinates[0] ? 0 : !user.account.location.coordinates[0];
		let long = !user.account.location.coordinates[1] ? 0 : !user.account.location.coordinates[1];
		let zip = !zipcode ? '75000' : zipcode;
		console.log(`https://moveet-api.herokuapp.com/api/v1/showtimes/?movie=${moviecode}long=${long}&lat${lat}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/showtimes/?long=${long}&lat${lat}&zip=${zip}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	//////////////////////////////////////////////////
	// Theaters methods //////////////////////////////
	//////////////////////////////////////////////////
	getAllTheaters(callback) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/theaters`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/theaters`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getTheaterById(callback, theaterid) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/theaters/${theaterid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/theaters/${theaterid}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	findTheaterAround(callback, user, zipcode) {
		let lat = !user.account.location.coordinates[0] ? 0 : !user.account.location.coordinates[0];
		let long = !user.account.location.coordinates[1] ? 0 : !user.account.location.coordinates[1];
		let zip = !zipcode ? '75000' : zipcode;
		console.log(`https://moveet-api.herokuapp.com/api/v1/theaters/find?lat=${lat}&long=${long}&zip=${zip}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/theaters/find?lat=${lat}&long=${long}&zip=${zip}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	//////////////////////////////////////////////////
	// Swiper methods ////////////////////////////////
	//////////////////////////////////////////////////
	swipeLike(callback, userid, movieid) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/swipelike/${movieid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/swipelike/${movieid}`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
		})
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	swipePass(callback, userid, movieid) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/swipepass/${movieid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/swipepass/${movieid}`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
		})
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	swiperDeck(callback, userid) {
		// console.log(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/swipepass/${movieid}`);
		// fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}/swipepass/${movieid}`, {
		// 	method: 'post',
		// 	headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
		// })
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		console.log('json', json);
		// 		callback(json);
		// 	});
	}
}
export default new Api();
