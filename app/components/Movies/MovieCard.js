import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from './Poster';
import Button from '../Core/Button';
import { Link } from 'react-router';

const users = [
	'59f62899753f98989fd32511',
	'59f62899753f98989fd3250d',
	'59f62899753f98989fd3250f',
	'59f62899753f98989fd32514',
	'59f62899753f98989fd32515',
	'59f62899753f98989fd32510',
	'59f62899753f98989fd32516',
	'59f62899753f98989fd32513',
	'59f62899753f98989fd3250e'
];

// Math.floor((Math.random() * 10) + 1);

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
					<p>De: {movie.castingShort['directors']}</p>
					<p>Avec: {`${movie.castingShort['actors'].substring(0, 83)}...`}</p>
				</div>
			);
		}
	}
	renderRuntime(movie) {
		let hours = Math.floor(movie.runtime / 3600);
		let mins = (movie.runtime - hours * 3600) / 60;
		return <span>{`${hours}h ${mins}min`}</span>;
	}
	renderButton(text, icon, color, fn, arg1, arg2) {
		return <Button text={text} icon={icon} color={color} onClickFn={fn} arg1={arg1} arg2={arg2} />;
	}

	render() {
		const { movie } = this.props;
		return (
			<div>
				<Link to={`/movies/${movie._id}`}>
					<div className={css(styles.movieCard, styles.hover)}>
						<Poster url={movie.posterPath} height={'75%'} width={'20%'} />
						<p className={css(styles.movieTitle)}>
							{movie.originalTitle} <br />
							{this.renderDate(movie)}, {this.renderRuntime(movie)}
						</p>
						<div className={css(styles.movieCasting)}>{this.renderCasting(movie)}</div>
						<p className={css(styles.movieSynopsis)}>{`${movie.synopsis.substring(0, 255)}...`}</p>
					</div>
				</Link>
				<div className={css(styles.buttonsContainer)}>
					<Button text={'Buddy Finder'} icon={'search'} color={'black'} />
					<Button
						text={'Watchlist'}
						icon={'plus'}
						color={'rgba(100,255,200,0.9)'}
						onClickFn={this.props.onClickFn}
						arg1={'59f62899753f98989fd3250d'}
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
		// backgroundColor: 'rgb(255, 204, 204)',
		backgroundColor: 'white',
		color: 'black',
		// border: '0.1em black solid',
		// borderRadius: '0.2em',
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
		width: '16em'
	},
	movieTitle: {
		position: 'absolute',
		top: '2em',
		left: '24vw',
		fontSize: '1.2em'
	},
	movieCasting: {
		position: 'absolute',
		top: '8em',
		left: '24vw',
		width: '50vw'
	},
	movieSynopsis: {
		position: 'absolute',
		top: '12em',
		left: '24vw',
		width: '45vw'
	},
	hover: {
		':hover': {
			boxShadow: '0 0 0.2em rgba(100,200,255,0.9)',
			borderColor: 'white'
		}
	}
});
export default MovieCard;
