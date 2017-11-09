import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollTop from './Core/ScrollTop';
import ReactTooltip from 'react-tooltip';
import Loader from './Core/Loader';
import ReleaseDate from './Movies/ReleaseDate';
import Runtime from './Movies/Runtime';
import Tag from './Core/Tag';
import Api from '../Api.js';

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
			<div>
				<p style={{ fontSize: '2em' }}>{movie.originalTitle}</p>
				<p>Sortie: {<ReleaseDate movie={movie} />}</p>
				<p>{<Runtime movie={movie} />}</p>
				<p>{this.renderGenre(movie)}</p>
				{this.renderCasting(movie)}
				<p>{movie.synopsis}</p>
			</div>
		);
	}
	renderTrailer(movie) {
		if (movie.hasPreview === 1) {
			let url = movie.trailerEmbed;
			let endUrl = url.search('</iframe>');
			let urlTrailer =
				url.substring(0, endUrl + 9).replace("<div id='ACEmbed'>", "<div id='blogvision'>") + '</div>';
			return (
				<div style={{ textAlign: 'center' }}>
					<div dangerouslySetInnerHTML={{ __html: urlTrailer }} />
				</div>
			);
		}
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
	renderCasting(movie) {
		if (movie.castingShort) {
			return (
				<div>
					<p>Réalisateur: {movie.castingShort['directors']}</p>
					<p>Acteurs: {movie.castingShort['actors']}</p>
				</div>
			);
		}
	}

	renderBubbles(buddies) {
		if (buddies.length > 0) {
			const resBubbles = buddies.map((buddy, index) => {
				// {
				// 	this.renderTrailer(this.state.movie);
				// }
				return (
					<div key={index}>
						<a
							key={index}
							href={`/buddies/${buddy._id}`}
							data-for="buddy"
							data-tip={`${buddy.account.username}<br />${buddy.account.age}`}
							style={{ position: 'absolute', left: (index + 1) * 45 }}
						>
							<img
								key={index}
								src={buddy.account.picture || 'http://via.placeholder.com/150x200'}
								width={60}
								height={60}
								style={{
									borderRadius: '50%',
									position: 'absolute',
									top: '10em',
									// bottom: 100,
									border: 'white 0.2em solid'
									// left: (index + 1) * 40,
								}}
							/>
						</a>
					</div>
				);
			});
			return resBubbles;
		}
	}

	render() {
		if (Object.keys(this.state.movie).length > 0) {
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
							{this.renderMovie(this.state.movie)}
							{this.renderTrailer(this.state.movie)}
						</div>
						<div
							style={{
								height: '90vh',
								marginTop: 55,
								width: '30vw',
								border: '0.1em black solid',
								float: 'right',
								position: 'relative'
							}}
						>
							Ils veulent voir ce film
							{this.renderBubbles(this.state.buddies)}
						</div>
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
const styles = StyleSheet.create({});
