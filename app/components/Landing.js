import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import of the action
// import { getMoviesByGenre } from '../actions/movie';
// import of the messages component
// import Messages from './Messages';
// import LandingItem from './LandingItem';
// import Gallery from './Gallery';
import Movies from './Movies';
// import Tabs from 'react-simpletabs';
import Loader from './Core/Loader';
import Api from '../Api.js';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			genre: '2'
		};
		// this.fetchGenre = this.fetchGenre.bind(this);
	}

	componentDidMount() {
		// this.props.dispatch(getMoviesByGenre(this.state.genre));
	}

	onBeforeChange(selectedIndex, $selectedPanel, $selectedTabMenu) {
		console.log('before the tab ' + selectedIndex);
	}
	onAfterChange(selectedIndex, $selectedPanel, $selectedTabMenu) {
		console.log('after the tab ' + selectedIndex);
	}

	render() {
		if (this.state.movies.length > 0) {
			return (
				<div
					className="container"
					style={{
						backgroundColor: ''
					}}
				>
					<div className="row">
						<div style={{ height: '100vh' }}>
							{console.log('this.state', this.state)}
							<div style={{ margin: 0, color: 'black' }}>
								<p onClick={() => this.fetchGenre(2)}>click me for Action</p>
								<p onClick={() => this.fetchGenre(3)}>click me for Drama</p>
								<p onClick={() => this.fetchGenre(4)}>click me for Comedy</p>
								<Movies movies={this.state.movies} />
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

// const mapStateToProps = state => {
// 	return {
// 		messages: state.messages,
// 		movies: state.movies
// 	};
// };

// export default connect(mapStateToProps)(Landing);
export default Landing;
