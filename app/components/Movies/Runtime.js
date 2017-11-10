import React, { Component } from 'react';

export default class Runtime extends Component {
	render() {
		const { runtime } = this.props;
		let hours = Math.floor(runtime / 3600);
		let mins = (runtime - hours * 3600) / 60;
		if (!(isNaN(hours) && isNaN(mins))) {
			return <span>, Durée: {`${hours}h${mins}`}</span>;
		} else {
			return <span />;
		}
	}
}
