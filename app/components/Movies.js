import React, { Component } from 'react';
import ScrollTop from './Core/ScrollTop';
import Loader from './Core/Loader';
import Tag from './Core/Tag';
import MovieCard from './Movies/MovieCard';
import ReactTooltip from 'react-tooltip';
import Select from 'react-select';
// import InfiniteScroll from 'react-infinite-scroller';
// import AnimakitExpander from 'animakit-expander';
import Api from '../Api.js';

const options = [
	{
		label: 'Action/Aventure',
		value: '1'
	},
	{
		label: 'Drame',
		value: '2'
	},
	{
		label: 'Animation',
		value: '3'
	},
	{
		label: 'Comédie',
		value: '4'
	},
	{
		label: 'Crime/Thriller',
		value: '5'
	},
	{
		label: 'Horreur',
		value: '6'
	},
	{
		label: 'Fantastique/Science-Fiction',
		value: '7'
	},
	{
		label: 'Romance',
		value: '8'
	},
	{
		label: 'Autres',
		value: '9'
	}
];

class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			value: [],
			total: 0,
			limit: 0,
			results: 0,
			sortAlpha: -1,
			sortDate: -1
		};
		this.toggleFavorite = this.toggleFavorite.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSortDate = this.handleSortDate.bind(this);
		this.handleSortTitle = this.handleSortTitle.bind(this);
	}
	componentDidMount() {
		Api.getAllMovies(json => {
			this.setState({
				movies: json.message,
				total: json.total,
				limit: json.limit,
				results: json.results
			});
		});
	}
	handleSortTitle() {
		this.setState({
			sortAlpha: this.state.sortAlpha * -1,
			selected: 'alpha'
		});
		console.log('state sortAlpha', this.state.sortAlpha);
		Api.getMoviesByGenre(
			json => {
				this.setState({
					movies: json.message,
					total: json.total,
					limit: json.limit,
					results: json.results
				});
			},
			this.state.value,
			'originalTitle',
			this.state.sortAlpha
		);
	}
	handleSortDate() {
		this.setState({
			sortDate: this.state.sortDate * -1,
			selected: 'date'
		});
		console.log('state sortDate', this.state.sortDate);
		Api.getMoviesByGenre(
			json => {
				this.setState({
					movies: json.message,
					total: json.total,
					limit: json.limit,
					results: json.results
				});
			},
			this.state.value,
			'release.releaseDate',
			this.state.sortDate
		);
	}

	handleSelectChange(value) {
		console.log("You've selected:", value);
		this.setState({
			value: value
		});
		Api.getMoviesByGenre(json => {
			this.setState({
				movies: json.message,
				total: json.total,
				limit: json.limit,
				results: json.results
			});
		}, value);
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
	renderMovies(arr) {
		if (!arr || arr.length === 0) {
			return (
				<div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<Loader />
					</div>
				</div>
			);
		}
		const resMovies = arr.map((movie, index) => {
			return (
				<div key={index}>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<MovieCard movie={movie} />{' '}
					</div>{' '}
				</div>
			);
		});
		return resMovies;
	}

	render() {
		return (
			<div
				className="container"
				style={{
					fontFamily: 'Quicksand'
				}}
			>
				<div className="row">
					<div
						style={{
							height: '100vh'
						}}
					>
						<div className="section">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h3 className="section-heading"> Choisir les genres </h3>{' '}
								<div style={{}}>
									<div
										style={{
											width: '40vw',
											float: 'left',
											display: 'inline-block'
										}}
									>
										<Select
											closeOnSelect={false}
											disabled={false}
											multi={true}
											onChange={this.handleSelectChange}
											placeholder="Sélectionnez les genres"
											removeSelected={true}
											simpleValue
											options={options}
											value={this.state.value}
										/>{' '}
									</div>{' '}
									<div
										style={{
											paddingTop: '0.5em',
											width: '20vw',
											display: 'inline-block',
											textAlign: 'center'
										}}
									>
										<Tag
											label={'Tri Alpha ' + (this.state.sortAlpha === -1 ? 'A-Z' : 'Z-A')}
											onClickFn={this.handleSortTitle}
										/>{' '}
										<Tag
											label={'Date de Sortie ' + (this.state.sortDate === -1 ? '↑' : '↓')}
											onClickFn={this.handleSortDate}
										/>{' '}
									</div>{' '}
									<div
										style={{
											paddingTop: '0.5em',
											width: '20vw',
											float: 'right',
											textAlign: 'right',
											display: 'inline-block'
										}}
									>
										{' '}
										{this.state.results} Résultats parmi {this.state.total} Films
									</div>
								</div>
							</div>
						</div>
						{this.renderMovies(this.state.movies)}
					</div>
				</div>
				<ScrollTop />
			</div>
		);
	}
}

export default Movies;
