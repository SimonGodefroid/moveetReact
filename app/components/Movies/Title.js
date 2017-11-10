import React, { Component } from 'react';

class Title extends Component {
	render() {
		const { title } = this.props;
		return <span>{title}</span>;
	}
}

export default Title;
