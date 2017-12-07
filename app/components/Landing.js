import React, { Component } from 'react';
// import Gallery from './Gallery';
import Movies from './Movies';
// import Tabs from 'react-simpletabs';
import Loader from './Core/Loader';
import Api from '../Api.js';
import Slider from 'react-slick';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
		// this.fetchGenre = this.fetchGenre.bind(this);
	}
	renderMovies() {
		const movies = this.state.movies.map(movie => {
			return (
				<div>
					<img src={`${movie.posterPath}`} height={'200em'} />
				</div>
			);
		});
		return movies;
	}
	componentDidMount() {
		// this.props.dispatch(getMoviesByGenre(this.state.genre));
		Api.getAllNowShowingMovies(
			json => {
				console.log('coucou json', json.message);
				this.setState({
					movies: json.message
				});
			},
			20,
			1,
			''
		);
	}

	render() {
		if (this.state.movies.length > 0) {
			console.log('this.state.movies', this.state.movies);
			return (
				<div
					className="container"
					style={{
						backgroundColor: 'white'
					}}
				>
					<div className="row" style={{ height: '100vh', fontFamily: 'Barlow' }}>
						<div className={`col-lg-8`}>
							<h3>Bienvenue sur Moveet, là où les passionnés de cinéma se rencontrent</h3>
							<p>Explorez les films pour trouver d'autres passionnés avec qui les voir</p>
							<Slider dots={true} infinite={true} speed={500} slidesToShow={10} slidesToScroll={1}>
								{this.renderMovies()}
							</Slider>
						</div>
					</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

export default Landing;
