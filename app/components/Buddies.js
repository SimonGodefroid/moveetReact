import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import ReactTooltip from 'react-tooltip';
import Poster from './Movies/Poster';
import Button from './Core/Button';
import Loader from './Core/Loader';
import ScrollTop from './Core/ScrollTop';
import Avatar from './User/Avatar';
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
		Api.getAllBuddies(json => {
			this.setState({ buddies: json.message });
		}, '59f62899753f98989fd3250d');
	}
	renderBuddies(buddies) {
		const resBuddies = buddies.map((buddy, index) => {
			return (
				<div key={index}>
					<div className={'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
						<div className={css(styles.buddyCard, styles.hover)}>
							<Avatar
								style={{ borderRadius: '1em' }}
								height={170}
								width={150}
								url={buddy.account.picture || 'http://via.placeholder.com/150x200'}
							/>
							<p className={css(styles.buddyTitle)}>
								{buddy.account.username} - {buddy.account.gender}, {buddy.account.age},{' '}
								{buddy.account.subscription}
							</p>
							<p className={css(styles.buddyBody)} style={{ fontFamily: 'Quicksand' }}>
								{buddy.account.description.substring(0, 80)}
							</p>
							{this.renderFavorites(buddy)}
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
						data-for="buddy"
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

	renderFavorites(buddy) {
		const resFavorites = buddy.fiveFavorites.map((favorite, index) => {
			return (
				<div key={index}>
					<a
						data-for="movie"
						data-tip={`${favorite.originalTitle}<br />`}
						style={{ position: 'absolute', top: '18em', left: (index + 1) * 70 }}
					>
						<Link to={`/movies/${favorite._id}`}>
							<img
								key={index}
								src={favorite.posterPath || 'http://via.placeholder.com/150x200'}
								width={70}
								height={100}
								style={{
									position: 'absolute',
									left: 200,
									bottom: 50,
									border: 'white 0.2em solid'
								}}
							/>
						</Link>
					</a>
				</div>
			);
		});
		return resFavorites;
	}

	render() {
		if (this.state.buddies.length > 0) {
			return (
				<div className="container" style={{ fontFamily: 'Quicksand' }}>
					<div className="row">
						<div style={{ height: '100vh', marginTop: 55 }}>{this.renderBuddies(this.state.buddies)}</div>
					</div>
					<ReactTooltip
						id="buddy"
						offset={{ top: 150, left: -30 }}
						place="top"
						type="success"
						effect="solid"
						multiline="true"
					/>
					<ReactTooltip
						id="movie"
						offset={{ top: 150, left: -235 }}
						place="top"
						type="success"
						effect="solid"
						multiline="true"
					/>
					<div style={{ margin: '0em', color: 'black' }}>{this.renderBubbles(this.state.buddies)}</div>
					<ScrollTop />
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
		height: '14em',
		border: '0.1em black solid',
		borderRadius: '0.2em',
		margin: '1em 0em',
		width: '90vw',
		padding: '1em'
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
	buttonsContainer: {
		position: 'absolute',
		top: '3em',
		right: '-2em',
		alignItems: 'center',
		display: 'inline',
		width: '20em'
	},
	hover: {
		':hover': {
			boxShadow: '0 0 1em rgba(255, 203, 238, 1)',
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
			backgroundColor: 'white',
			border: '0.2em black solid',
			color: 'black'
		}
	},
	scrollTop: {
		backgroundColor: 'black',
		padding: '0.5em',
		position: 'fixed',
		fontSize: '1em',
		bottom: 50,
		right: 30,
		cursor: 'pointer',
		transitionDuration: '0.2s',
		transitionTimingFunction: 'linear',
		transitionDelay: '0s'
	}
});
