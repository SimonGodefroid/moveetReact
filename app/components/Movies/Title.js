import React, { Component } from 'react';

class Title extends Component {
	render() {
		const { title, full } = this.props;
		console.log('title.length', title, title.length > 47);
		let titleDisplay = title.length > 47 ? `${title.substr(0, 44)}...` : title;
		console.log('titleDisplay', titleDisplay);
		return <span>{full === true ? title : titleDisplay}</span>;
	}
}

export default Title;
