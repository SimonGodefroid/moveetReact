import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ReactTooltip from 'react-tooltip';
import Poster from './Movies/Poster.js';
import Button from './Core/Button.js';
import Loader from './Core/Loader.js';
import Api from '../Api.js';

export default class Buddies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buddies: []
		};
	}

	componentDidMount() {
		// this.props.dispatch(getMoviesByGenre(this.state.genre));
		Api.getBuddies(json => {
			this.setState({ buddies: json.message });
		});
	}
	renderBuddies(buddies) {
		const resBuddies = buddies.map((buddy, index) => {
			return (
				<div key={index}>
					<div className={'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
						<div className={css(styles.buddyCard, styles.hover)}>
							<Poster
								style={{ borderRadius: '0.3em' }}
								url={buddy.account.picture || 'http://via.placeholder.com/150x200'}
							/>
							<p className={css(styles.buddyTitle)}>
								{buddy.account.username} - {buddy.account.genre.substring(0, 1)}, {buddy.account.age},{' '}
								{buddy.account.subscription}
							</p>
							<p className={css(styles.buddyBody)}>{buddy.account.description}</p>
							{/*this.renderFavorites(buddy.account.favorites)*/}
							<div className={css(styles.buttonsContainer)}>
								<Button
									text={'Chatter avec '}
									param={buddy.account.username}
									icon={'comment'}
									color={'black'}
								/>
								<Button text={'Proposer une séance'} icon={'clock-o'} color={'rgba(100,255,200,0.9)'} />
								<Button text={'Proposer un film'} icon={'ticket'} color={'pink'} />
							</div>
						</div>
					</div>
				</div>
			);
		});
		return resBuddies;
	}
	renderBubbles(buddies) {
		const resBubbles = buddies.map((buddy, index) => {
			return (
				<div key={index}>
					<a
						data-tip={`${buddy.account.username}<br />${buddy.account.age}`}
						style={{ position: 'absolute', left: (index + 1) * 45 }}
					>
						<img
							key={index}
							src={buddy.account.picture || 'http://via.placeholder.com/150x200'}
							width={60}
							height={60}
							style={{
								borderRadius: '50%',
								position: 'absolute',
								bottom: 100,
								border: 'white 0.2em solid'
								// left: (index + 1) * 40,
							}}
						/>
					</a>
				</div>
			);
		});
		return resBubbles;
	}

	// renderFavorites(favorites) {
	// 	const resFavorites = favorites.map((favorite, index) => {
	// 		return (
	// 			<div key={index} style={{ height: '10em', margin: '0 0.1em' }}>
	// 				<img src={favorite.posterPath} style={{ height: '10em' }} />
	// 			</div>
	// 		);
	// 	});

	// 	return (
	// 		<div style={{ width: '40vw', height: '10em', position: 'absolute', top: '70', left: '400' }}>
	// 			{resFavorites}
	// 		</div>
	// 	);
	// }

	render() {
		if (this.state.buddies.length > 0) {
			return (
				<div className="container">
					<div className="row">
						<div style={{ height: '100vh', marginTop: 55 }}>{this.renderBuddies(this.state.buddies)}</div>
					</div>
					<ReactTooltip
						offset={{ top: 150, left: -30 }}
						place="top"
						type="success"
						effect="solid"
						multiline="true"
					/>
					<div style={{ margin: '0', color: 'black' }}>{this.renderBubbles(this.state.buddies)}</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

const styles = StyleSheet.create({
	buddyCard: {
		backgroundColor: 'rgba(100,200,255,0.9)',
		color: 'black',
		border: '0.1em black solid',
		borderRadius: '0.2em',
		margin: '1em 0',
		width: '90vw',
		padding: '1em'
	},
	buddyTitle: {
		position: 'absolute',
		top: '2em',
		left: '15vw',
		fontSize: '1.2em'
	},
	buddyBody: {
		position: 'absolute',
		top: '4em',
		left: '15vw',
		fontSize: '1.2em',
		width: '30vw'
	},
	buttonsContainer: {
		position: 'absolute',
		top: '5em',
		right: '0',
		alignItems: 'center',
		display: 'inline',
		width: '20em'
	},
	hover: {
		':hover': {
			// transition: 'all .3s ease-in-out',
			// transform: 'scale(1.009)',
			outline: 'solid grey 0.2em',
			borderColor: 'white'
		}
	},
	hoverBubbles: {
		':hover': {
			transition: 'all .25s ease-in-out',
			transform: 'scale(2.009) translate(.1em,-1em)',
			zIndex: '10000'
		}
	},
	hoverButton: {
		':hover': {
			// transition: 'all .3s ease-in-out',
			// transform: 'scale(1.009)'
			backgroundColor: 'white',
			border: '0.2em black solid',
			color: 'black'
		}
	}
});
