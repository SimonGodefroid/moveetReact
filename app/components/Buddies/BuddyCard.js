import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../Core/Button';
import Avatar from '../User/Avatar';

class BuddyCard extends Component {
	renderName(buddy) {
		if (buddy.account.username) {
			return buddy.account.username;
		}
	}

	render() {
		const { buddy } = this.props;
		return (
			<div className={css(styles.buddyCard, styles.hover)}>
				<Avatar
					style={{ borderRadius: '1em' }}
					height={170}
					width={150}
					url={buddy.account.picture || 'http://via.placeholder.com/150x200'}
				/>
				<p className={css(styles.buddyTitle)}>
					{buddy.account.username} - {buddy.account.gender}, {buddy.account.age}, {buddy.account.subscription}
				</p>
				<p className={css(styles.buddyBody)} style={{ fontFamily: 'Quicksand' }}>
					{buddy.account.description.substring(0, 80)}
				</p>
				{/*this.renderFavorites(buddy)*/}
				<div className={css(styles.buttonsContainer)}>
					<Button text={'Chatter avec '} param={buddy.account.username} icon={'comment'} color={'black'} />
					<Button text={'Proposer une séance'} icon={'clock-o'} color={'rgba(100,255,200,0.9)'} />
					<Button text={'Proposer un film'} icon={'ticket'} color={'pink'} />
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	buddyCard: {
		backgroundColor: 'white',
		color: 'black',
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
		width: '16em'
	},
	buddyTitle: {
		position: 'absolute',
		top: '1.6em',
		left: '15vw',
		fontSize: '1.2em'
	},
	buddyBody: {
		position: 'absolute',
		top: '3.4em',
		left: '15vw',
		fontSize: '1.2em',
		width: '50vw',
		minWidth: '40em'
	},
	hover: {
		':hover': {
			boxShadow: '0 0 0.2em rgba(100,200,255,0.9)',
			borderColor: 'white'
		}
	}
});
export default BuddyCard;
