import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Tag extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: this.props.label
		};
	}
	render() {
		return (
			<span
				key={this.props.index}
				className={css(styles.tag, styles.hoverTag)}
				onClick={() => {
					this.props.onClickFn();
				}}
			>
				{this.props.label}
			</span>
		);
	}
}
const styles = StyleSheet.create({
	tag: {
		color: 'white',
		backgroundColor: 'grey',
		padding: '0.2em 0.4em',
		margin: '0 0.3em 0 0',
		borderRadius: '2em',
		border: '0.1em grey solid'
	},
	hoverTag: {
		':hover': {
			color: 'grey',
			backgroundColor: 'white',
			border: '0.1em grey white',
			cursor: 'pointer'
		}
	}
});
export default Tag;
