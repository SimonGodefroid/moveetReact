import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import ReactTooltip from 'react-tooltip';
import BuddyCard from './Buddies/BuddyCard';
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
		this.getAllBuddies = this.getAllBuddies.bind(this);
		this.getMatches = this.getMatches.bind(this);
	}

	componentDidMount() {
		// this.props.dispatch(getMoviesByGenre(this.state.genre));
		Api.getAllBuddies(json => {
			this.setState({ buddies: json.message });
		}, '59f62899753f98989fd3250d');
	}

	getAllBuddies(userid) {
		Api.getAllBuddies(json => {
			this.setState({ buddies: json.message });
		}, userid);
	}

	getMatches(userid) {
		Api.getMatches(json => {
			this.setState({ buddies: json.message });
		}, userid);
	}

	renderBuddies(arr) {
		if (!arr || arr.length === 0) {
			return (
				<div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<Loader />
					</div>
				</div>
			);
		}
		const resBuddies = arr.map((buddy, index) => {
			return (
				<div key={index}>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<BuddyCard buddy={buddy} />
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
		return (
			<div
				className="container"
				style={{
					fontFamily: 'Quicksand'
				}}
			>
				<div className="row">
					<div style={{ height: '100vh' }}>
						<div className="section">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h3 className="section-heading" style={{ textAlign: 'center', height: '20vh' }}>
									BUDDIES
								</h3>
								<Button
									text={'Voir tous les buddies'}
									color={'pink'}
									onClickFn={this.getAllBuddies}
									arg1={'59f62899753f98989fd3250d'}
								/>
								<Button
									text={'Trouver mes matches'}
									color={'pink'}
									onClickFn={this.getMatches}
									arg1={'59f62899753f98989fd3250d'}
								/>
								<div />
							</div>
						</div>
						{this.renderBuddies(this.state.buddies)}
					</div>
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
	}
}

const styles = StyleSheet.create({
	header: {
		textAlign: 'center',
		height: '20vh'
	},
	hoverBubbles: {
		':hover': {
			transition: 'all .25s ease-in-out',
			transform: 'scale(2.009) translate(.1em,-1em)',
			zIndex: '10000'
		}
	}
});
