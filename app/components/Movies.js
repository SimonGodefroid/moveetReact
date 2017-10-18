import React, { Component } from 'react';
import Poster from './Movies/Poster';
import InfiniteScroll from 'react-infinite-scroller';
import AnimakitExpander from 'animakit-expander';

class Movies extends Component {
	componentDidMount() {}

	renderCasting(movie) {
		if (movie.castingShort) {
			return (
				<p>
					Acteurs: {movie.castingShort['actors']} <br />
					Réalisateur: {movie.castingShort['directors']}
				</p>
			);
		}
	}

	renderDate(movie) {
		if (movie.release.releaseDate) {
			return new Date(movie.release.releaseDate.toString()).toLocaleDateString('fr-FR');
		}
	}

	renderMovies(arr) {
		const resMovies = arr.map((movie, index) => {
			return (
				<div key={index}>
					<div
						className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
						style={{
							color: 'black',
							border: '0.1em black solid',
							width: '90vw',
							margin: '1em 0',
							padding: '1em'
						}}
					>
						<Poster url={movie.posterPath} />
						<p style={{ position: 'absolute', top: '1em', left: '15vw' }}>
							{movie.originalTitle} - {this.renderDate(movie)}
						</p>
						<p style={{ position: 'absolute', top: '3em', left: '15vw' }}>
							{movie.synopsis.substring(0, 255)}
						</p>
						<p style={{ position: 'absolute', top: '10em', left: '15vw', width: '15vw' }}>
							{this.renderCasting(movie)}
						</p>
						<button className="btn btn-success" style={{ margin: '0 1em' }}>
							Bande Annonce
						</button>
						<div
							style={{
								position: 'absolute',
								top: '8em',
								right: '2em',
								alignItems: 'center',
								display: 'inline',
								width: '30em'
							}}
						>
							<button className="btn btn-success" style={{ width: '10vw' }}>
								Buddy Finder
							</button>
							<button className="btn btn-warning" style={{ width: '10vw' }}>
								+ Watchlist
							</button>
							<button className="btn btn-danger" style={{ width: '10vw' }}>
								<i className="fa fa-clock-o" aria-hidden="true" /> Séances
							</button>
						</div>
					</div>
				</div>
			);
		});
		return resMovies;
	}

	render() {
		if (!this.props.movies) {
			return <div>Loading...</div>;
		}
		return <div>{this.renderMovies(this.props.movies)}</div>;
	}
}

export default Movies;
