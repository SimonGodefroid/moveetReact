import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
class Button extends Component {
	render() {
		return (
			<button
				className={`btn ${css(styles.button, styles.hoverButton)}`}
				onClick={() => {
					this.props.onClickFn(this.props.arg1, this.props.arg2);
				}}
				style={{ backgroundColor: this.props.color, border: `${this.props.color} 0.2em solid` }}
			>
				<i className={`fa fa-${this.props.icon}`} aria-hidden="true" /> {this.props.text} {this.props.param}
			</button>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		marginTop: '0.5em',
		width: '15em',
		borderRadius: '0.3em',
		color: 'white'
	},
	hoverButton: {
		':hover': {
			backgroundColor: 'white',
			border: '0.2em black solid',
			color: 'black'
		}
	}
});
export default Button;
