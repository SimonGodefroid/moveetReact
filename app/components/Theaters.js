import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ReactTooltip from 'react-tooltip';
import ReactPaginate from 'react-paginate';
import Api from '../Api';
import ScrollTop from './Core/ScrollTop';
import Poster from './Movies/Poster';
import TheaterCard from './Theaters/TheaterCard';
import Button from './Core/Button';
import Loader from './Core/Loader';

// import InfiniteScroll from 'react-infinite-scroller';
// import AnimakitExpander from 'animakit-expander';

class Theaters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theaters: [],
			limit: 10,
			page: ''
		};
		this.handlePageClick = this.handlePageClick.bind(this);
	}
	componentDidMount() {
		Api.getAllTheaters(
			json => {
				this.setState({ theaters: json.message });
			},
			this.state.limit,
			this.state.page
		);
	}

	handlePageClick(data) {
		let selected = data.selected + 1;
		this.setState(
			{ page: selected },
			Api.getAllTheaters(
				json => {
					this.setState({ theaters: json.message });
				},
				10,
				selected
			),
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		);
	}

	renderTheaters(arr) {
		const resTheaters = arr.map((theater, index) => {
			return (
				<div key={index}>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<a href={`/theaters/${theater._id}`}>
							<TheaterCard theater={theater} />
						</a>
						<div className={css(styles.buttonsContainer)}>
							<Button text={'Buddy Finder'} icon={'search'} color={'black'} />
						</div>
					</div>
				</div>
			);
		});
		return resTheaters;
	}

	render() {
		if (!this.state.theaters || this.state.theaters.length === 0) {
			return <Loader />;
		}
		return (
			<div className="container" style={{ fontFamily: 'Quicksand' }}>
				<div className="row">
					<div
						style={{
							height: '100vh',
							marginTop: 55
						}}
					>
						{this.renderTheaters(this.state.theaters)}
					</div>
				</div>
				<div style={{ textAlign: 'center' }}>
					<ReactPaginate
						previousLabel={'previous'}
						nextLabel={'next'}
						breakLabel={<a href="">...</a>}
						breakClassName={'break-me'}
						pageCount={this.state.pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={this.handlePageClick}
						containerClassName={'pagination'}
						subContainerClassName={'pages pagination'}
						activeClassName={'active'}
					/>
				</div>
				<ScrollTop />
			</div>
		);
	}
}
const styles = StyleSheet.create({
	buttonsContainer: {
		position: 'absolute',
		top: '3em',
		right: '0',
		alignItems: 'center',
		display: 'inline',
		width: '20em'
	},
	hoverButton: {
		':hover': {
			backgroundColor: 'white',
			color: 'black'
		}
	}
});

export default Theaters;
