import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from './Movies/Poster.js';
import Api from '../Api.js';
import ReactTooltip from 'react-tooltip';
import MDSpinner from 'react-md-spinner';

export default class Buddies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buddies: [],
			genre: '2',
			color: 'black'
		};
	}

	componentDidMount() {
		// this.props.dispatch(getMoviesByGenre(this.state.genre));
		Api.getBuddies(json => {
			this.setState({ buddies: json.message });
		});
		console.log('this.state', this.state);
	}
	renderBubbles(buddies) {
		const resBubbles = buddies.map((buddy, index) => {
			return (
				<div>
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

	renderFavorites(favorites) {
		const resFavorites = favorites.map((favorite, index) => {
			return (
				<div key={index} style={{ height: '10em', margin: '0 0.1em' }}>
					<img src={favorite.posterPath} style={{ height: '10em' }} />
				</div>
			);
		});

		return (
			<div style={{ width: '40vw', height: '10em', position: 'absolute', top: '70', left: '400' }}>
				{resFavorites}
			</div>
		);
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
							<p style={{ position: 'absolute', top: '2em', left: '15vw', fontSize: '1.2em' }}>
								{buddy.account.username} - {buddy.account.genre}
							</p>
							<p style={{ position: 'absolute', top: '3em', left: '15vw', fontSize: '1.2em' }}>
								{buddy.account.subscription}
							</p>
							<p style={{ position: 'absolute', top: '10em', left: '15vw', width: '15vw' }}>
								{buddy.account.age}
							</p>
							{/*this.renderFavorites(buddy.account.favorites)*/}
							<div
								style={{
									position: 'absolute',
									top: '5em',
									right: '0',
									alignItems: 'center',
									display: 'inline',
									width: '20em'
								}}
							>
								<button
									className={`btn ${css(styles.hoverButton)}`}
									style={{
										width: '15em',
										backgroundColor: 'black',
										color: 'white',
										borderRadius: '15em',
										border: 'black 0.2em solid'
									}}
								>
									<i className="fa fa-comment" aria-hidden="true" /> Chatter avec{' '}
									{buddy.account.username}
								</button>
								<button
									className={`btn ${css(styles.hoverButton)}`}
									style={{
										width: '15em',
										borderRadius: '15em',
										marginTop: '0.5em',
										backgroundColor: 'rgba(100,255,200,0.9)',
										color: 'white',
										border: 'rgba(100,255,200,0.9) 0.2em solid'
									}}
								>
									<i className="fa fa-clock-o" aria-hidden="true" /> Proposer une séance
								</button>
								<button
									className={`btn ${css(styles.hoverButton)}`}
									style={{
										marginTop: '0.5em',
										width: '15em',
										borderRadius: '15em',
										backgroundColor: 'pink',
										color: 'white',
										border: 'pink 0.2em solid'
									}}
								>
									<i className="fa fa-ticket" aria-hidden="true" /> Proposer un film
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		});
		return resBuddies;
	}

	render() {
		if (this.state.buddies.length > 0) {
			return (
				<div className="container" style={{}}>
					<div className="row">
						<div style={{ height: '100vh', marginTop: 55 }}>
							{console.log('this.state', this.state)}
							<div style={{ width: '40vw' }} />
							<div style={{ margin: '0', color: 'black' }}>
								{this.renderBuddies(this.state.buddies)}
								<ReactTooltip
									offset={{ top: 150, left: -30 }}
									place="top"
									type="success"
									effect="solid"
									multiline="true"
								/>
							</div>
						</div>
					</div>
					<div style={{ margin: '0', color: 'black' }}>{this.renderBubbles(this.state.buddies)}</div>
				</div>
			);
		} else {
			return (
				<div style={{ height: '100vh' }}>
					<MDSpinner size={100} />
				</div>
			);
		}
	}
}

const styles = StyleSheet.create({
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
	},
	buddyCard: {
		backgroundColor: 'rgba(100,200,255,0.9)',
		color: 'black',
		border: '0.1em black solid',
		borderRadius: '0.2em',
		margin: '1em 0',
		width: '90vw',
		padding: '1em'
	}
});
