import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollTop from './Core/ScrollTop';
import ReactTooltip from 'react-tooltip';
import Loader from './Core/Loader';
import Bubbles from './Buddies/Bubbles';
import Poster from './Movies/Poster';
import Title from './Movies/Title';
import ReleaseDate from './Movies/ReleaseDate';
import Runtime from './Movies/Runtime';
import Casting from './Movies/Casting';
import Synopsis from './Movies/Synopsis';
import Trailer from './Movies/Trailer';
import Tag from './Core/Tag';
import Api from '../Api';
import Global from '../../Global';

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: '',
			buddies: [],
			pending: true
		};
	}
	componentDidMount() {
		Api.getMovieById(json => {
			this.setState({ movie: json.message });
		}, this.props.params.id);

		Api.findBuddy(
			json => {
				this.setState({ buddies: json.message });
			},
			'59f62899753f98989fd3250d',
			this.props.params.id
		);
	}

	renderMovie(movie) {
		return (
			<div className={`row`}>
				<div className={`${css(styles.posterHolder)} col-xs-12 col-sm-6 col-md-4`}>
					<Poster url={movie.posterPath} />
				</div>
				<div className={`${css(styles.informationsHolder)} col-xs-12 col-sm-6 col-md-8`}>
					<div className={css(styles.title)}>
						<Title title={movie.originalTitle} />
					</div>
					<div className={`${css(styles.dateRuntime)}`}>
						<p>
							<ReleaseDate releaseDate={movie.release.releaseDate} />
							<Runtime runtime={movie.runtime} />
						</p>
					</div>
					<div>
						<Casting casting={movie.castingShort} length={100} />
					</div>
					<div>
						<Synopsis synopsis={movie.synopsis} />
					</div>
				</div>
			</div>
		);
	}

	renderGenre(movie) {
		const genreRes = movie.genreList.map((genre, index) => {
			return (
				<a href={`/movies?genreList=${genre}`}>
					<Tag index={index} label={genre} />
				</a>
			);
		});
		return genreRes;
	}

	render() {
		const { buddies, movie } = this.state;
		if (Object.keys(movie).length > 0) {
			return (
				<div className={`${css(styles.root)} container`}>
					<div className="row">
						<div className={`${css(styles.leftPanel)} col-md-8 col-lg-8 col-sm-12`}>
							{this.renderMovie(movie)}
							{/*<Trailer movie={movie} />*/}
						</div>
						<div className={`${css(styles.rightPanel)} col-md-4 col-lg-4 col-sm-12 col-xs-12`}>
							<Bubbles buddies={buddies} />
						</div>
					</div>
					<div className={`${css(styles.border)} row`}>
						<div
							className={`${css(styles.border)} col-md-6 col-lg-6`}
							style={{ textAlign: 'center', height: '20vh' }}
						>
							<p>Bande Annonce</p>
							<p>WIP</p>
						</div>
						<div
							className={`${css(styles.border)} col-md-6 col-lg-6`}
							style={{ textAlign: 'center', height: '20vh' }}
						>
							<p>
								{!movie.statistics.userRating
									? ''
									: `Note Utilisateurs: ${movie.statistics.userRating}`}
							</p>
							<p>
								{!movie.statistics.userRatingCount
									? ''
									: `Nombre de votants ${movie.statistics.userRatingCount}`}
							</p>
							<p>
								{!movie.statistics.pressReviewCount
									? ''
									: `Note Presse ${movie.statistics.pressReviewCount}`}
							</p>
							<p>
								{!movie.statistics.userReviewCount
									? ''
									: `Nombre de Critiques ${movie.statistics.userReviewCount}`}
							</p>
							<p>
								{!movie.statistics.rankTopMovie
									? ''
									: `Rang Meilleurs Films ${movie.statistics.rankTopMovie}`}
							</p>
							<p>
								{!movie.statistics.theaterCount
									? ''
									: `Nombre de Cinémas ${movie.statistics.theaterCount}`}
							</p>
						</div>
					</div>
					<div className={`${css(styles.border, styles.showtimes)} row`}>
						<h2>Séances</h2>
						<p>WIP</p>
					</div>
					<ReactTooltip
						id="buddy"
						offset={{ top: '-140em', left: '-30em' }}
						place="top"
						type="success"
						effect="solid"
						multiline="true"
					/>
					<ScrollTop />
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}
const styles = StyleSheet.create({
	root: {
		fontFamily: 'Barlow'
	},
	leftPanel: {
		padding: 20
		// border: '0.1em black solid'
	},
	title: {
		fontSize: '2em',
		[Global.screenSize.smartphoneEm]: {
			textAlign: 'center'
		}
	},
	rightPanel: {
		// backgroundColor: 'blue',
		padding: 20,
		height: '50vh'
		// border: '0.1em black solid'
	},
	posterHolder: {},
	// border: { border: '0.1em black solid' },
	dateRuntime: {},
	informationsHolder: {
		[Global.screenSize.smartphoneEm]: {
			textAlign: 'justify',
			textJustify: 'inter-word',
			'-moz-text-align-last': 'center',
			textAlignLast: 'center'
		}
	},
	showtimes: { padding: 20 }
});
