import React, { Component } from 'react';

export default class Runtime extends Component {
	render() {
		const { movie } = this.props;
		let hours = Math.floor(movie.runtime / 3600);
		let mins = (movie.runtime - hours * 3600) / 60;
		if (!(isNaN(hours) && isNaN(mins))) {
			return <span>Durée: {`${hours}h${mins}`}</span>;
		} else {
			return <span />;
		}
	}
}
