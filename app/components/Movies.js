import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollTop from './Core/ScrollTop';
import Loader from './Core/Loader';
import Tag from './Core/Tag';
import MovieCard from './Movies/MovieCard';
import ReactTooltip from 'react-tooltip';
import Pagination from './Core/Pagination';
import Select from 'react-select';
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
			limit: 25,
			results: 0,
			page: '',
			sortAlpha: -1,
			sortDate: -1,
			pageCount: '',
			forcePage: ''
		};
		this.toggleFavorite = this.toggleFavorite.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSortDate = this.handleSortDate.bind(this);
		this.handleSortTitle = this.handleSortTitle.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
	}
	componentDidMount() {
		const title = this.props.pageTitle;
		Api.getAllNowShowingMovies(
			json => {
				this.setState({
					movies: json.message,
					total: json.total,
					limit: json.limit,
					results: json.results,
					pageCount: Math.floor(json.results / json.limit)
				});
			},
			this.state.limit,
			this.state.page,
			''
		);
		this.renderTags();
	}
	handleSortTitle() {
		this.setState({
			sortAlpha: this.state.sortAlpha * -1,
			selected: 'alpha'
		});
		Api.getAllNowShowingMovies(
			json => {
				this.setState({
					movies: json.message,
					total: json.total,
					limit: json.limit,
					results: json.results,
					pageCount: Math.floor(json.results / json.limit)
				});
			},
			this.state.limit,
			'',
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
		Api.getAllNowShowingMovies(
			json => {
				this.setState({
					movies: json.message,
					total: json.total,
					limit: json.limit,
					results: json.results,
					forcePage: 0,
					pageCount: Math.floor(json.results / json.limit)
				});
			},
			this.state.limit, // limit
			'', // page
			this.state.value, // genres selected
			'release.releaseDate', // sort by
			this.state.sortDate // sort order
		);
	}

	handleSelectChange(value) {
		console.log("You've selected:", value);
		this.setState({
			value: value
		});
		Api.getAllNowShowingMovies(
			json => {
				this.setState({
					movies: json.message,
					total: json.total,
					limit: json.limit,
					results: json.results,
					forcePage: 0,
					pageCount: Math.floor(json.results / json.limit)
				});
			},
			this.state.limit,
			1,
			value
		);
	}

	handlePageClick(data) {
		console.log('coucou data', data);
		let selected = data.selected + 1;
		this.setState(
			{ page: selected, forcePage: selected - 1 },
			Api.getAllNowShowingMovies(
				json => {
					this.setState({
						movies: json.message,
						total: json.total,
						limit: json.limit,
						results: json.results,
						pageCount: Math.floor(json.results / json.limit)
					});
				},
				this.state.limit,
				selected,
				this.state.value
			),
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		);
	}
	renderTags() {
		console.log('coucou renderTags');
		return (
			<div>
				<Tag
					label={'Tri Alpha ' + (this.state.sortAlpha === -1 ? 'A-Z' : 'Z-A')}
					onClickFn={this.handleSortTitle}
				/>
				<Tag
					label={'Date de Sortie ' + (this.state.sortDate === -1 ? '↑' : '↓')}
					onClickFn={this.handleSortDate}
				/>
			</div>
		);
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
						<MovieCard movie={movie} onClickFn={this.toggleFavorite} />
					</div>
				</div>
			);
		});
		return resMovies;
	}

	render() {
		if (Object.keys(this.state.movies).length > 0) {
			return (
				<div
					className="container"
					style={{
						fontFamily: 'Quicksand'
					}}
				>
					<div className="row">
						<div style={{ height: '100vh' }}>
							<div className="section">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<h3 className={`${css(styles.header)} section-heading`}>FILMS</h3>
									<div style={{}}>
										<div
											style={{
												width: '40vw',
												float: 'left',
												display: 'inline-block',
												zIndex: 2000
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
											/>
										</div>
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
											/>
											<Tag
												label={'Date de Sortie ' + (this.state.sortDate === -1 ? '↑' : '↓')}
												onClickFn={this.handleSortDate}
											/>
										</div>
										<div className={css(styles.results)}>
											{this.state.results} Résultats parmi {this.state.total} Films
										</div>
									</div>
								</div>
								<Pagination
									pageCount={this.state.pageCount}
									handlePageClickFn={this.handlePageClick}
									forcePage={this.state.forcePage}
								/>
							</div>
							{this.renderMovies(this.state.movies)}
						</div>
					</div>
					<Pagination
						pageCount={this.state.pageCount}
						handlePageClickFn={this.handlePageClick}
						forcePage={this.state.forcePage}
					/>
					<ScrollTop />
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

const styles = StyleSheet.create({
	results: {
		paddingTop: '0.5em',
		width: '20vw',
		float: 'right',
		textAlign: 'right',
		display: 'inline-block'
	},
	header: {
		textAlign: 'center',
		height: '20vh'
	}
});

export default Movies;
