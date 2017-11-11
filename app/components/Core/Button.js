import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Global from '../../../Global';
export default class Button extends Component {
	render() {
		return (
			<button
				className={`btn ${css(styles.button, styles.hoverButton)}`}
				onClick={() => {
					this.props.onClickFn(this.props.arg1, this.props.arg2);
				}}
				style={{ color: this.props.color, border: `${this.props.color} 0.1em solid`, width: this.props.width }}
			>
				<i className={`fa fa-${this.props.icon}`} aria-hidden="true" />{' '}
				<span style={{ textAlign: 'justify' }}>
					{this.props.text} {this.props.param}
				</span>
			</button>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		marginTop: '1vw',
		// width: '15vw',
		borderRadius: '2em',
		backgroundColor: 'white',
		display: 'block',
		textAlign: 'center',
		boxSizing: 'border-box',
		[Global.screenSize.smartphoneEm]: {
			display: 'inline',
			margin: '1vw'
		},
		[Global.screenSize.smartphoneLandscapeEm]: {
			display: 'inline',
			margin: '1vw'
		},
		[Global.screenSize.tabletEm]: {
			display: 'inline',
			margin: '1vw'
		}
	},
	hoverButton: {
		':hover': {
			backgroundColor: 'black',
			border: '0.1em white solid',
			color: 'white',
			'-webkit-transition': 'all .40s',
			'-moz-transition': 'all .40s',
			transition: 'all .40s',
			'-webkit-font-smoothing': 'antialiased',
			'-moz-osx-font-smoothing': 'grayscale'
		}
	}
});
