import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from './Poster';
import Button from '../Core/Button';

class MovieCard extends Component {
	renderDate(movie) {
		if (movie.release.releaseDate) {
			return new Date(movie.release.releaseDate.toString()).toLocaleDateString('fr-FR');
		}
	}

	renderCasting(movie) {
		if (movie.castingShort && movie.castingShort.actors) {
			return (
				<div>
					<p>Acteurs: {`${movie.castingShort['actors'].substring(0, 83)}...`}</p>
					<p>Réalisateur: {movie.castingShort['directors']}</p>
				</div>
			);
		}
	}

	renderButton(text, icon, color, fn, arg1, arg2) {
		return <Button text={text} icon={icon} color={color} onClickFn={fn} arg1={arg1} arg2={arg2} />;
	}

	render() {
		const { movie } = this.props;
		return (
			<div>
				<a href={`/movies/${movie._id}`}>
					<div className={css(styles.movieCard, styles.hover)}>
						<Poster url={movie.posterPath} />
						<p className={css(styles.movieTitle)}>
							{movie.originalTitle} - {this.renderDate(movie)}
						</p>
						<div className={css(styles.movieCasting)}>{this.renderCasting(movie)}</div>
						<p className={css(styles.movieSynopsis)}>{`${movie.synopsis.substring(0, 255)}...`}</p>
					</div>
				</a>
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
					{movie.hasShowtime === 1
						? this.renderButton('Séances', 'clock-o', 'rgba(100,200,255,0.9)', '', movie._id, '')
						: ''}
					{movie.hasPreview === 1 || movie.statusList === 'nowshowing'
						? this.renderButton('Bande Annonce', 'play-circle', 'red', '', movie._id, '')
						: ''}
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	movieCard: {
		// backgroundColor: 'rgba(100,200,255,0.9)',
		backgroundColor: 'rgb(255, 204, 204)',
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
export default MovieCard;
