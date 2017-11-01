import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollTop from './Core/ScrollTop';
import Poster from './Movies/Poster';
import Button from './Core/Button';
import Loader from './Core/Loader';
import ReactTooltip from 'react-tooltip';
// import InfiniteScroll from 'react-infinite-scroller';
// import AnimakitExpander from 'animakit-expander';
import Api from '../Api.js';

class Showtimes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showtimes: []
		};
	}
	componentDidMount() {
		Api.getAllMovies(json => {
			this.setState({ movies: json.message });
		});
	}

	renderShowtimes(arr) {
		const resShowtimes = arr.map((showtime, index) => {
			return (
				<div key={index}>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className={css(styles.showtimeCard, styles.hover)}>
							<Poster url={showtime.posterPath} />
							<p className={css(styles.showtimeTitle)}>
								{showtime.originalTitle} - {this.renderDate(showtime)}
							</p>
							<p className={css(styles.showtimeCasting)}>{this.renderCasting(showtime)}</p>
							<p className={css(styles.showtimeSynopsis)}>{`${showtime.synopsis.substring(
								0,
								255
							)}...`}</p>
						</div>
						<div className={css(styles.buttonsContainer)}>
							<Button text={'Buddy Finder'} icon={'search'} color={'black'} />
							<Button
								text={'Watchlist'}
								icon={'plus'}
								color={'rgba(100,255,200,0.9)'}
								onClickFn={this.toggleFavorite}
								arg1={'59f62899753f98989fd3250d'}
								arg2={showtime._id}
							/>
							{movie.hasShowtime === 1
								? this.renderButton('Séances', 'clock-o', 'pink', '', movie._id, '')
								: ''}
							{movie.hasPreview === 1
								? this.renderButton('Bande Annonce', 'play-circle', 'red', '', movie._id, '')
								: ''}
						</div>
					</div>
				</div>
			);
		});
		return resShowtimes;
	}

	render() {
		if (!this.state.movies || this.state.movies.length === 0) {
			return <Loader />;
		}
		return (
			<div className="container" style={{ fontFamily: 'Quicksand' }}>
				<div className="row">
					<div
						style={{
							height: '100vh',
							marginTop: 55
						}}
					>
						{this.renderShowtimes(this.state.showtimes)}
					</div>
				</div>
				<ScrollTop />
			</div>
		);
	}
}

const styles = StyleSheet.create({
	movieCard: {
		backgroundColor: 'rgba(100,200,255,0.9)',
		color: 'black',
		border: '0.1em black solid',
		borderRadius: '0.2em',
		margin: '1em 0',
		width: '90vw',
		padding: '1em'
	},
	buttonsContainer: {
		position: 'absolute',
		top: '3em',
		right: '0',
		alignItems: 'center',
		display: 'inline',
		width: '20em'
	},
	movieTitle: {
		position: 'absolute',
		top: '2em',
		left: '15vw',
		fontSize: '1.2em'
	},
	movieCasting: {
		position: 'absolute',
		top: '4.5em',
		left: '15vw',
		width: '50vw'
	},
	movieSynopsis: {
		position: 'absolute',
		top: '9em',
		left: '15vw',
		width: '50vw'
	},
	hover: {
		':hover': {
			boxShadow: '0 0 1em rgba(255, 203, 238, 1)',
			borderColor: 'white'
		}
	},
	hoverButton: {
		':hover': {
			backgroundColor: 'white',
			color: 'black'
		}
	},
	scrollTop: {
		backgroundColor: 'rgba(100,100,100,0.3)',
		textAlign: 'center',
		fontSize: '3em',
		width: '1em',
		height: '1em',
		color: 'white',
		lineHeight: '1.5em'
	}
});
export default Showtimes;
