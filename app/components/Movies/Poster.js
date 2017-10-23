import React, { Component } from 'react';

class Poster extends Component {
	render() {
		return <img src={this.props.url} height="200" width="150" style={this.props.style} />;
	}
}

export default Poster;
