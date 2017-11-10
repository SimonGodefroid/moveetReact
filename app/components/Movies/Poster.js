import React, { Component } from 'react';

export default class Poster extends Component {
	addDefaultSrc(event) {
		event.target.src = 'http://placehold.it/150x200/92c952';
	}
	render() {
		const { url, height, width, style, alt } = this.props;
		return (
			<img
				className={'img-responsive'}
				src={url}
				onError={this.addDefaultSrc}
				height={height}
				width={`${width}px`}
				style={style}
				alt={alt || ''}
			/>
		);
	}
}
