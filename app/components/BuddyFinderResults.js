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
export default class BuddyFinderResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buddies: []
		};
		// this.getAllBuddies = this.getAllBuddies.bind(this);
		// this.getMatches = this.getMatches.bind(this);
	}

	componentDidMount() {
		console.log('this.props', this.props);
		Api.findBuddy(
			json => {
				this.setState({
					buddies: json.message
				});
			},
			'59f62899753f98989fd3250d',
			this.props.params.id
		);
	}

	renderBuddies(arr) {
		console.log('arr', arr);
		if (!arr || arr.length === 0) {
			return <Loader />;
		}
		const resBuddies = arr.map((buddy, index) => {
			return (
				<div key={index}>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<BuddyCard buddy={buddy} />{' '}
					</div>{' '}
				</div>
			);
		});
		return resBuddies;
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
					<div
						style={{
							height: '100vh'
						}}
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
									Trouver un buddy pour: {this.props.location.search}
								</h3>
								{this.renderBuddies(this.state.buddies)}
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						margin: '0em',
						color: 'black'
					}}
				/>
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
