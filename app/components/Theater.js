import React, { Component } from 'react';
import Api from '../Api';
import Loader from './Core/Loader';
import ScrollTop from './Core/ScrollTop';
class Theater extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showtimes: [],
			theater: ''
		};
	}
	componentDidMount() {
		Api.getTheaterShowtimes(json => {
			this.setState({
				showtimes: json.message.feed.theaterShowtimes[0].movieShowtimes,
				theater: json.message.feed.theaterShowtimes[0].place.theater
			});
			console.log('json', json.message);
		}, this.props.location.search);
	}

	renderTheater(theater) {
		console.log('theater', theater);
		// 230x230
		return (
			<div>
				<p>{theater.name}</p>
				<p>
					{theater.address} {theater.postalCode} {theater.city}
				</p>
			</div>
		);
	}

	renderShowtimes(showtimes) {
		console.log('showtimes', showtimes);
		const showRes = showtimes.map((showtime, index) => {
			if (showtime.preview === 'false') {
				return showtime.scr.map((dates, index2) => {
					return (
						<div>
							{showtime.onShow.movie.title}
							<p>{dates.d}</p>
							{dates.t.map((time, index3) => {
								return <p>{time.$}</p>;
							})}
						</div>
					);
				});
			}
		});
		return showRes;
	}
	render() {
		console.log('this.props', this.props.location.search);
		if (Object.keys(this.state.theater).length > 0) {
			return (
				<div className="container" style={{ fontFamily: 'Quicksand' }}>
					<div className="row">
						<div
							style={{
								height: '90vh',
								marginTop: 55,
								width: '60vw',
								border: '0.1em black solid',
								float: 'left'
							}}
						>
							{this.renderTheater(this.state.theater)}
							{this.renderShowtimes(this.state.showtimes)}
						</div>
						<ScrollTop />
					</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

export default Theater;
