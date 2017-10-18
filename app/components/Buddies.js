import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Poster from './Movies/Poster.js';
import Api from '../Api.js';

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
			this.setState({ buddies: json.usersInfo });
		});
		console.log('this.state', this.state);
	}
	renderBubbles(buddies) {
		const resBubbles = buddies.map((buddy, index) => {
			return (
				<img
					key={index}
					src={buddy.account.picture || 'http://via.placeholder.com/150x200'}
					width={40}
					height={40}
					style={{ borderRadius: '50%', position: 'absolute', bottom: 100, left: (index + 1) * 20 }}
				/>
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
							<Poster url={buddy.account.picture || 'http://via.placeholder.com/150x200'} />
							<p style={{ position: 'absolute', top: '1em', left: '15vw' }}>
								{buddy.account.username} - {buddy.account.genre}
							</p>
							<p style={{ position: 'absolute', top: '3em', left: '15vw' }}>
								{buddy.account.subscription}
							</p>
							<p style={{ position: 'absolute', top: '10em', left: '15vw', width: '15vw' }}>
								{buddy.account.age}
							</p>
							{/*this.renderFavorites(buddy.account.favorites)*/}
							<div
								style={{
									position: 'absolute',
									top: '8em',
									right: '2em',
									alignItems: 'center',
									display: 'inline',
									width: 300
								}}
							>
								<button
									className="btn"
									style={{ width: '10vw', backgroundColor: 'black', color: 'white' }}
								>
									<i className="fa fa-comment" aria-hidden="true" /> Chatter avec{' '}
									{buddy.account.username}
								</button>
								<button className="btn btn-danger" style={{ width: '10vw' }}>
									<i className="fa fa-clock-o" aria-hidden="true" /> Proposer une séance
								</button>
								<button className="btn btn-danger" style={{ width: '10vw' }}>
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
							<div style={{ margin: '0', color: 'black' }}>{this.renderBuddies(this.state.buddies)}</div>
						</div>
					</div>
					<div style={{ margin: '0', color: 'black' }}>{this.renderBubbles(this.state.buddies)}</div>
				</div>
			);
		} else {
			return (
				<div style={{ height: '100vh' }}>
					<p>Loading buddies</p>
				</div>
			);
		}
	}
}

const styles = StyleSheet.create({
	hover: {
		':hover': {
			backgroundColor: 'red',
			transition: 'all .3s ease-in-out',
			transform: 'scale(1.02)'
		}
	},
	buddyCard: {
		backgroundColor: 'rgba(90,60,90,0.9)',
		color: 'black',
		border: '0.1em black solid',
		borderRadius: '0.2em',
		margin: '1em 0',
		width: '90vw',
		padding: '1em'
	}
});
