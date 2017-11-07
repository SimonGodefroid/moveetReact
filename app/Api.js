class Api {
	//////////////////////////////////////////////////
	// Movies methods ////////////////////////////////
	//////////////////////////////////////////////////
	getAllNowShowingMovies(callback, limit, page, genre, sortField, sortOrder) {
		let sort = !(sortField || sortOrder) ? '' : `&sort[${sortField}]=${sortOrder}`;
		console.log(
			`https://moveet-api.herokuapp.com/api/v1/movies?genreListSimon=${genre}&sort[statistics.releaseWeekPosition]=-1&sort[statistics.theaterCount]=-1&statusList=nowshowing&release.releaseState.value=Sortie%20en%20salle&limit=${limit}&page=${page}${sort}`
		);
		fetch(
			`https://moveet-api.herokuapp.com/api/v1/movies?genreListSimon=${genre}&sort[statistics.releaseWeekPosition]=-1&sort[statistics.theaterCount]=-1&statusList=nowshowing&release.releaseState.value=Sortie%20en%20salle&limit=${limit}&page=${page}${sort}`
		)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getAllComingSoonMovies(callback) {
		fetch(
			`https://moveet-api.herokuapp.com/api/v1/movies?sort[statistics.releaseWeekPosition]=-1&sort[statistics.theaterCount]=-1&statusList=comingsoon&release.releaseState.value=Sortie%20en%20salle`
		)
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
	//////////////////////////////////////////////////
	// Users methods /////////////////////////////////
	//////////////////////////////////////////////////
	getAllBuddies(callback, userid) {
		console.log('GET ALL BUDDIES URL', `https://moveet-api.herokuapp.com/api/v1/buddies/${userid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/buddies/${userid}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getBuddyById(callback, userid) {
		console.log('$GET BUDDY BY ID URL', `https://moveet-api.herokuapp.com/api/v1/users/${userid}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/users/${userid}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getMatches(callback, userid) {
		console.log('$GET MATCHES URL', `https://moveet-api.herokuapp.com/api/v1/users/${userid}/matches`);
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
		console.log(`https://moveet-api.herokuapp.com/api/v1/showtimes/?movie=${moviecode}&long=${long}&lat${lat}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/showtimes/?
		?movie=${moviecode}&long=${long}&lat${lat}&zip=${zip}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	getTheaterShowtimes(callback, theatercode) {
		console.log('theatercode', theatercode);
		console.log(`https://moveet-api.herokuapp.com/api/v1/showtimes?theaters=${theatercode}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/showtimes?theaters=${theatercode}`)
			.then(res => res.json())
			.then(json => {
				console.log('json', json);
				callback(json);
			});
	}
	//////////////////////////////////////////////////
	// Theaters methods //////////////////////////////
	//////////////////////////////////////////////////
	getAllTheaters(callback, limit, page) {
		console.log(`https://moveet-api.herokuapp.com/api/v1/theaters?limit=${limit}&page=${page}`);
		fetch(`https://moveet-api.herokuapp.com/api/v1/theaters?limit=${limit}&page=${page}`)
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
