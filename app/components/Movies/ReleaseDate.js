import React, { Component } from 'react';

export default class ReleaseDate extends Component {
	render() {
		const { movie } = this.props;
		if (movie.release.releaseDate) {
			return <span>{new Date(movie.release.releaseDate.toString()).toLocaleDateString('fr-FR')}</span>;
		} else {
			return <span />;
		}
	}
}
