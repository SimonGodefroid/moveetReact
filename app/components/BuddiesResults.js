import React, { Component } from 'react';
import Api from '../Api';
class BuddiesResults extends Component {
	constructor(props) {
		super(props);
		thi.state = {
			results: []
		};
	}

	renderResults(arr) {
		const results = arr.map((element, index) => {
			return <p key={index}>{element._id}</p>;
		});
		return results;
	}
	componentDidMount() {
		Api.getMatches(json => {
			this.setState({ results: json.message });
		});
	}
	render() {
		return <div />;
	}
}

export default BuddiesResults;
