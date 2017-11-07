import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Api from '../Api';
import Loader from './Core/Loader';
import ScrollTop from './Core/ScrollTop';
import Button from './Core/Button';
import Avatar from './User/Avatar';
export default class Buddy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buddy: ''
		};
	}
	componentDidMount() {
		Api.getBuddyById(json => {
			this.setState({ buddy: json.message });
		}, this.props.params.id);
	}

	renderBuddy(buddy) {
		if (Object.keys(buddy).length > 0) {
			const buddyKeys = Object.keys(buddy.account).map((key, index) => {
				return (
					<p>
						{key}: {buddy['account'][key]}
					</p>
				);
			});
			return (
				<div>
					<div className={css(styles.buddyCard, styles.hover)}>
						<Avatar
							style={{ borderRadius: '1em' }}
							height={'50%'}
							width={'10%'}
							url={buddy.account.picture || 'http://via.placeholder.com/150x200'}
						/>
						<p className={css(styles.buddyTitle)}>
							{buddy.account.username} - {buddy.account.gender}, {buddy.account.age},{' '}
							{buddy.account.subscription}
						</p>
						<p className={css(styles.buddyBody)} style={{ fontFamily: 'Quicksand' }}>
							{buddy.account.description.substring(0, 80)}
						</p>
						{/*this.renderFavorites(buddy)*/}
						<div>
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
			);
		} else {
			return <Loader />;
		}
	}

	renderPageName(buddy) {
		if (!buddy.account.username) {
			return <Loader />;
		} else {
			return (
				<h3 className="section-heading" style={{ textAlign: 'center', height: '10vh' }}>
					{buddy.account.username}
				</h3>
			);
		}
	}

	render() {
		if (Object.keys(this.state.buddy).length > 0) {
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
									{this.renderPageName(this.state.buddy)}

									<div />
								</div>
							</div>
							{this.renderBuddy(this.state.buddy)}
						</div>
					</div>
					<ScrollTop />
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

const styles = StyleSheet.create({});
