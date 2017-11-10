import React, { Component } from 'react';

export default class Avatar extends Component {
	addDefaultSrc(event) {
		event.target.src = 'http://via.placeholder.com/150x200/000000/ffffff/?text=Moveet';
	}
	render() {
		const { url, height, width, style, key } = this.props;
		return (
			<img
				className={'img-responsive'}
				src={url}
				onError={this.addDefaultSrc}
				height={height || 200}
				width={width || 150}
				style={style}
				key={key}
			/>
		);
	}
}
