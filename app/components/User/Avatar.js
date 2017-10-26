import React, { Component } from 'react';

class Poster extends Component {
	render() {
		return (
			<img src={this.props.url} height={this.props.height} width={this.props.width} style={this.props.style} />
		);
	}
}

export default Poster;
