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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
export default class Buddies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buddies: [],
			matches: [],
			tabIndex: 0
		};
		// this.getAllBuddies = this.getAllBuddies.bind(this);
		// this.getMatches = this.getMatches.bind(this);
	}

	componentDidMount() {
		// this.props.dispatch(getMoviesByGenre(this.state.genre));
		Api.getAllBuddies(json => {
			this.setState({
				buddies: json.message
			});
		}, '59f62899753f98989fd3250d');

		Api.getMatches(json => {
			this.setState({
				matches: json.message
			});
		}, '59f62899753f98989fd3250d');
	}

	getAllBuddies(userid) {
		Api.getAllBuddies(json => {
			this.setState({
				buddies: json.message
			});
		}, userid);
	}

	renderBuddies(arr, type) {
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
				<div key={index} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<BuddyCard buddy={buddy} type={type} />{' '}
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
						style={{
							position: 'absolute',
							left: (index + 1) * 45
						}}
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
						/>{' '}
					</a>{' '}
				</div>
			);
		});
		return resBubbles;
	}

	render() {
		if (Object.keys(this.state.buddies).length > 0) {
			return (
				<div
					className="container"
					style={{
						fontFamily: 'Quicksand'
					}}
				>
					<div className="row">
						<div
						// style={{
						// height: '100vh'
						// }}
						>
							<div className="section">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<h3
										className="section-heading"
										style={{
											textAlign: 'center',
											height: '10vh'
										}}
									>
										BUDDIES
									</h3>
									<Tabs>
										<TabList>
											<Tab>
												Buddies{' '}
												<span
												// className={'label label-as-badge'}
												// style={{ borderRadius: '2em', backgroundColor: 'black' }}
												>
													{this.state.buddies.length}
												</span>
											</Tab>
											<Tab>
												Matches <span>{this.state.matches.length}</span>
											</Tab>
										</TabList>
										<TabPanel>{this.renderBuddies(this.state.buddies, 'buddies')}</TabPanel>
										<TabPanel>{this.renderBuddies(this.state.matches, 'matches')}</TabPanel>
									</Tabs>
								</div>
							</div>
						</div>
					</div>
					{/*<ReactTooltip
						id="buddy"
						offset={{
							top: 150,
							left: -30
						}}
						place="top"
						type="success"
						effect="solid"
						multiline="true"
					/>*/}

					<div
						style={{
							margin: '0em',
							color: 'black'
						}}
					>
						{/*this.renderBubbles(this.state.buddies)*/}
					</div>
					<ScrollTop />
				</div>
			);
		} else {
			return <Loader />;
		}
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
