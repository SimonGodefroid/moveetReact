import React, { Component } from 'react';

export default class ReleaseDate extends Component {
	render() {
		const { releaseDate } = this.props;
		if (releaseDate) {
			return <span>{new Date(releaseDate.toString()).toLocaleDateString('fr-FR')}</span>;
		} else {
			return <span />;
		}
	}
}
