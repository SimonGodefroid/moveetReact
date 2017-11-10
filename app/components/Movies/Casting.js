import React, { Component } from 'react';

export default class Casting extends Component {
	render() {
		const { casting, length } = this.props;
		if (casting) {
			let len = !length ? 78 : length;
			let dots = '...';
			let director = casting.directors ? `De: ${casting.directors}` : '';
			let actors = casting.actors ? `Avec: ${casting.actors.substring(0, len)}${dots}` : '';
			return (
				<div>
					<p>{director}</p>
					<p>{actors}</p>
				</div>
			);
		} else {
			return <div />;
		}
	}
}
