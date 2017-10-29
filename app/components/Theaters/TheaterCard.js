import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from '../Movies/Poster';
class TheaterCard extends Component {
	render() {
		return (
			<div className={css(styles.theaterCard, styles.hover)}>
				<Poster url={this.props.theater.picture.href} />
				<p className={css(styles.theaterTitle)}>
					{this.props.theater.name},{this.props.theater.address}
					{this.props.theater.postalCode}
					{this.props.theater.city}
				</p>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	theaterCard: {
		backgroundColor: 'rgba(100,200,255,0.9)',
		color: 'black',
		border: '0.1em black solid',
		borderRadius: '0.2em',
		margin: '1em 0',
		width: '90vw',
		padding: '1em'
	},
	buttonsContainer: {
		position: 'absolute',
		top: '3em',
		right: '0',
		alignItems: 'center',
		display: 'inline',
		width: '20em'
	},
	theaterTitle: {
		position: 'absolute',
		top: '2em',
		left: '15vw',
		fontSize: '1.2em'
	},
	hover: {
		':hover': {
			boxShadow: '0 0 1em rgba(255, 203, 238, 1)',
			borderColor: 'white'
		}
	},
	hoverButton: {
		':hover': {
			backgroundColor: 'white',
			color: 'black'
		}
	}
});

export default TheaterCard;
