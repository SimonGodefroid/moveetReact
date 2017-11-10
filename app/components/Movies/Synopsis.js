import React, { Component } from 'react';

export default class Synopsis extends Component {
	// 380
	render() {
		const { synopsis, length } = this.props;
		const synopsisDisplay = synopsis.length > length ? `${synopsis.substring(0, length || 20)}...` : synopsis;
		return <p>{synopsisDisplay}</p>;
	}
}
