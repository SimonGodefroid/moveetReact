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
import Global from '../../../Global';

export default class MovieCard extends Component {
	renderButton(text, icon, color, fn, arg1, arg2) {
		return <Button text={text} icon={icon} color={color} onClickFn={fn} arg1={arg1} arg2={arg2} />;
	}

	render() {
		const { movie } = this.props;
		return (
			<div>
				<Link to={`/movies/${movie._id}`}>
					<div className={`${css(styles.movieCard, styles.hover)} row`}>
						<div>
							<div className={`col-xs-4 col-sm-2 col-md-2 col-lg-2`}>
								<Poster url={movie.posterPath} />
							</div>
							<div className={`${css(styles.movieInfo)} col-xs-8 col-sm-10 col-md-7 col-lg-7`}>
								<p className={`${css(styles.movieTitle)}`}>
									<Title title={movie.originalTitle} full={false} /> <br />
									<span className={`hidden-xs`}>
										<ReleaseDate releaseDate={movie.release.releaseDate} />
									</span>
									<span className={`hidden-xs`}>
										<Runtime runtime={movie.runtime} />
									</span>
								</p>
								<div className={`${css(styles.movieCasting)}`}>
									<Casting casting={movie.castingShort} />
								</div>
								<div className={`${css(styles.movieSynopsis)} hidden-xs`}>
									<Synopsis synopsis={movie.synopsis} length={370} />
								</div>
							</div>
						</div>
					</div>
				</Link>
				<div className={`row`}>
					<div className={`${css(styles.buttonsContainer)} hidden-xs hidden-sm`}>
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
				<div className={`row`}>
					<div className={`${css(styles.buttonsContainerResponsive)}  col-xs-8 col-sm-8 hidden-md hidden-lg`}>
						<Link to={{ pathname: `/findbuddy/${movie._id}`, search: `${movie.originalTitle}` }}>
							<Button text={''} icon={'search'} color={'black'} onClickFn={() => {}} />
						</Link>
						<Button
							icon={'plus'}
							color={'rgba(100,255,200,0.9)'}
							onClickFn={this.props.onClickFn}
							arg1={'59f62899753f98989fd3250d'}
							arg2={movie._id}
						/>
						{movie.hasShowtime === 1
							? this.renderButton('', 'clock-o', 'rgba(100,200,255,0.9)', '', movie._id, '')
							: ''}
						{movie.hasPreview === 1 || movie.statusList === 'nowshowing'
							? this.renderButton('', 'play-circle', 'red', '', movie._id, '')
							: ''}
					</div>
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
		padding: '1em',
		minHeight: '240px'
	},
	movieInfo: {
		color: 'black'
	},
	movieTitle: {
		fontSize: '1.2em'
	},
	movieCasting: {
		position: 'absolute',
		top: '4em'
	},
	movieSynopsis: {
		position: 'absolute',
		top: '8em',
		paddingBottom: '1em'
	},
	buttonsContainer: {
		padding: '1em',
		position: 'absolute',
		top: '1em',
		right: '1em'
	},
	buttonsContainerResponsive: {
		[Global.screenSize.smartphoneEm]: {
			padding: '1em',
			position: 'absolute',
			top: '70%',
			textAlign: 'center'
		},
		[Global.screenSize.smartphoneLandscapeEm]: {
			padding: '1em',
			position: 'absolute',
			top: '70% !important',
			textAlign: 'center'
		},
		padding: '1em',
		position: 'absolute',
		top: '1em',
		right: '1em',
		textAlign: 'center'
	},
	hover: {
		':hover': {
			boxShadow: '0 0 0.2em rgba(100,200,255,0.9)',
			borderColor: 'white'
		}
	}
});
