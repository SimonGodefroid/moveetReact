const showtimes = require('./docs/sample-showtimes.json');

const shows = showtimes.movieShowtimes;

const showRes = shows.map((showtime, index) => {
	let obj = {};
	// console.log('showtime', showtime);
	let dates = showtime.scr.map((date, index2) => {
		return date;
	});
	console.log('dates array', dates);
	showtime.scr.map((dates, index2) => {
		obj.movie = showtime.onShow.movie;

		// let times = dates.t.map((time, index3) => {
		// 	return time;
		// });
		// obj.times = times;
	});
	obj.dates = dates;
	return obj;
});

// console.log('showRes', JSON.stringify(showRes[4], null, 2));
// console.log('showRes', showRes);
