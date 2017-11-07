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
		Api.getAllComingSoonMovies(json => {
			this.setState({ movies: json.message });
		});
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
					<div className="row">My Landing Page</div>
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
