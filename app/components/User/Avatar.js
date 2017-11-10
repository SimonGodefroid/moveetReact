import React, { Component } from 'react';

export default class Avatar extends Component {
	addDefaultSrc(event) {
		event.target.src = 'http://placehold.it/150x200/92c952';
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
