import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from './Movies/Poster';
// import InfiniteScroll from 'react-infinite-scroller';
// import AnimakitExpander from 'animakit-expander';
import Api from '../Api.js';
import Button from './Core/Button';
import Loader from './Core/Loader';

class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			genre: 2,
			expanded: false
		};
		// this.toggle = this.toggle.bind(this);
		this.toggleFavorite = this.toggleFavorite.bind(this);
	}
	componentDidMount() {
		Api.getAllMovies(json => {
			this.setState({ movies: json.message });
		});
	}
	fetchGenre(genre) {
		Api.getMoviesByGenre(json => {
			this.setState({ movies: json.message });
		}, genre);
	}
	toggleFavorite(movie, user) {
		Api.toggleFavorite(
			json => {
				console.log('json', json);
			},
			movie,
			user
		);
	}
	// toggle() {
	// 	this.setState({ expanded: !this.state.expanded });
	// }
	renderMovies(arr) {
		const resMovies = arr.map((movie, index) => {
			return (
				<div key={index}>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className={css(styles.movieCard, styles.hover)}>
							<Poster url={movie.posterPath} />
							<p className={css(styles.movieTitle)}>
								{movie.originalTitle} - {this.renderDate(movie)}
							</p>
							<p className={css(styles.movieCasting)}>{this.renderCasting(movie)}</p>
							<p className={css(styles.movieSynopsis)}>{`${movie.synopsis.substring(0, 255)}...`}</p>
							<div className={css(styles.buttonsContainer)}>
								<Button text={'Buddy Finder'} icon={'search'} color={'black'} />
								<Button
									text={'Watchlist'}
									icon={'plus'}
									color={'rgba(100,255,200,0.9)'}
									onClickFn={this.toggleFavorite}
									arg1={'59ed03350e23a465a4878559'}
									arg2={movie._id}
								/>
								<Button text={'Séances'} icon={'clock-o'} color={'pink'} />
								<Button text={'Bande Annonce'} icon={'play-circle'} color={'red'} />
							</div>
						</div>
					</div>
				</div>
			);
		});
		return resMovies;
	}
	renderCasting(movie) {
		if (movie.castingShort) {
			return (
				<div>
					<p>Acteurs: {movie.castingShort['actors']}</p>
					<p>Réalisateur: {movie.castingShort['directors']}</p>
				</div>
			);
		}
	}

	renderDate(movie) {
		if (movie.release.releaseDate) {
			return new Date(movie.release.releaseDate.toString()).toLocaleDateString('fr-FR');
		}
	}

	// <div onClick={() => this.toggle()}>titre</div>
	// <AnimakitExpander expanded={this.state.expanded} duration={200}>
	// 	<div>Coucou</div>
	// </AnimakitExpander>
	render() {
		if (!this.state.movies || this.state.movies.length === 0) {
			return <Loader />;
		}
		return (
			<div className="container">
				<div className="row">
					<div
						style={{
							height: '100vh',
							marginTop: 55
						}}
					>
						{this.renderMovies(this.state.movies)}
					</div>
				</div>
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
			// transition: 'all .3s ease-in-out',
			// transform: 'scale(1.009)',
			outline: 'solid grey 0.2em',
			borderColor: 'white'
		}
	},
	hoverButton: {
		':hover': {
			// transition: 'all .3s ease-in-out',
			// transform: 'scale(1.009)'
			backgroundColor: 'white',
			color: 'black'
		}
	}
});
export default Movies;
