import React, { Component } from 'react';

export default class Poster extends Component {
	// 216x 288
	addDefaultSrc(event) {
		event.target.src = 'http://via.placeholder.com/340x453/000000/ffffff/?text=Moveet';
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
