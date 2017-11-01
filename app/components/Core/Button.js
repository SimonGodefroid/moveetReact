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
				style={{ color: this.props.color, border: `${this.props.color} 0.1em solid` }}
			>
				<i className={`fa fa-${this.props.icon}`} aria-hidden="true" /> {this.props.text} {this.props.param}
			</button>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		marginTop: '0.5em',
		width: '12em',
		borderRadius: '2em',
		backgroundColor: 'white'
	},
	hoverButton: {
		':hover': {
			backgroundColor: 'black',
			border: '0.1em white solid',
			color: 'white'
		}
	}
});
export default Button;
