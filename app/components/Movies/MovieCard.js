import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from './Poster';
import Button from '../Core/Button';
import Title from '../Movies/Title';
import Runtime from '../Movies/Runtime';
import ReleaseDate from '../Movies/ReleaseDate';
import Casting from '../Movies/Casting';
import Synopsis from '../Movies/Synopsis';
import { Link } from 'react-router';

export default class MovieCard extends Component {
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
							<Title title={movie.originalTitle} /> <br />
							<ReleaseDate releaseDate={movie.release.releaseDate} />
							<Runtime runtime={movie.runtime} />
						</p>
						<div className={css(styles.movieCasting)}>
							<Casting casting={movie.castingShort} />
						</div>
						<div className={css(styles.movieSynopsis)}>
							<Synopsis synopsis={movie.synopsis} />
						</div>
					</div>
				</Link>
				<div className={css(styles.buttonsContainer)}>
					<Link to={{ pathname: `/findbuddy/${movie._id}`, search: `${movie.originalTitle}` }}>
						<Button text={'Buddy Finder'} icon={'search'} color={'black'} onClickFn={() => {}} />
					</Link>
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
		backgroundColor: 'white',
		color: 'black',
		margin: '1em 0',
		width: '90vw',
		padding: '1em'
	},
	buttonsContainer: {
		position: 'absolute',
		top: '10%',
		right: '0',
		alignItems: 'center',
		display: 'inline',
		width: '16em'
	},
	movieTitle: {
		position: 'absolute',
		top: '8%',
		left: '24vw',
		fontSize: '1.2em'
	},
	movieCasting: {
		position: 'absolute',
		top: '30%',
		left: '24vw',
		width: '50vw'
	},
	movieSynopsis: {
		position: 'absolute',
		top: '50%',
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
