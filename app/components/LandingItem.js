import React, { Component } from 'react';

class LandingItem extends Component {
	renderListItem(arr) {
		const listItems = arr.map((listItem, index) => {
			return (
				<li key={index} style={{ height: '20vh' }}>
					<a href={listItem.link}>
						<p>{listItem.title}</p>
						<p>{listItem.body}</p>
					</a>
				</li>
			);
		});
		return listItems;
	}

	render() {
		return (
			<div className="col-sm-4" style={{ marginTop: '10vh' }}>
				<p style={{ textAlign: 'center' }}>{this.props.title}</p>
				<div style={{ height: '20vh', overflow: 'scroll', border: '0.1em solid black' }}>
					<ul style={{ listStyleType: 'none' }}>{this.renderListItem(this.props.items)}</ul>
				</div>
			</div>
		);
	}
}

export default LandingItem;
