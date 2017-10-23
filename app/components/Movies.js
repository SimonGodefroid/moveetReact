import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from './Movies/Poster';
import InfiniteScroll from 'react-infinite-scroller';
import AnimakitExpander from 'animakit-expander';

class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};
		this.toggle = this.toggle.bind(this);
	}
	componentDidMount() {}
	toggle() {
		console.log('coucou', this.state);
		this.setState({ expanded: !this.state.expanded });
	}
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
						<p style={{ position: 'absolute', top: '3em', left: '15vw', width: '40vw' }}>
							{this.renderCasting(movie)}
						</p>
						<p style={{ position: 'absolute', top: '7em', left: '15vw', width: '50vw' }}>
							{movie.synopsis.substring(0, 255)}
						</p>

						<button
							className="btn btn-success"
							style={{ margin: '0 1em', position: 'absolute', top: '12em' }}
						>
							Bande Annonce
						</button>
						<div
							style={{
								position: 'absolute',
								top: '5em',
								right: '0',
								alignItems: 'center',
								display: 'inline',
								width: '20em'
							}}
						>
							<button
								className={`btn ${css(styles.hoverButton)}`}
								style={{
									width: '15em',
									marginTop: '0.5em',
									backgroundColor: 'black',
									color: 'white',
									borderRadius: '15em'
								}}
							>
								<i className="fa fa-search" aria-hidden="true" /> Buddy Finder
							</button>
							<button
								className="btn"
								style={{
									width: '15em',
									marginTop: '0.5em',
									backgroundColor: 'black',
									color: 'white',
									borderRadius: '15em'
								}}
							>
								<i className="fa fa-plus" aria-hidden="true" /> Watchlist
							</button>
							<button
								className="btn"
								style={{
									width: '15em',
									marginTop: '0.5em',
									backgroundColor: 'black',
									color: 'white',
									borderRadius: '15em'
								}}
							>
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
		return (
			<div>
				<div onClick={() => this.toggle()}>titre</div>
				<AnimakitExpander expanded={this.state.expanded} duration={200}>
					<div>Coucou</div>
				</AnimakitExpander>
				{this.renderMovies(this.props.movies)}
			</div>
		);
	}
}
const styles = StyleSheet.create({
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
