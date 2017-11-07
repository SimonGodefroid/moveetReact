import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../Core/Button';
import Avatar from '../User/Avatar';
import { Link } from 'react-router';
class BuddyCard extends Component {
	renderName(buddy) {
		if (buddy.account.username) {
			return buddy.account.username;
		}
	}
	renderMovies(buddy) {
		let arr = buddy.fiveFavorites || buddy.matchingMovies;
		if (arr) {
			const resMovies = arr.map((movie, index) => {
				return (
					<div key={index}>
						<a
							data-for="movie"
							data-tip={`${movie.originalTitle}<br />`}
							style={{ position: 'absolute', top: '18em', left: (index + 1) * 70 }}
						>
							<Link to={`/movies/${movie._id}`}>
								<img
									key={index}
									src={movie.posterPath || 'http://via.placeholder.com/150x200'}
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
			return resMovies;
		}
	}
	render() {
		const { buddy } = this.props;
		return (
			<div>
				<Link to={`/buddies/${buddy._id}`}>
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
						{/*this.renderMatches(buddy)*/}
						{this.renderMovies(buddy)}
					</div>
				</Link>
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
		minHeight: '40vh',
		width: '90vw',
		padding: '1em'
	},
	buttonsContainer: {
		position: 'absolute',
		top: '3em',
		right: '0',
		alignItems: 'center',
		display: 'block'
		// width: '16em'
	},
	buddyTitle: {
		position: 'absolute',
		top: '3vw',
		left: '15vw',
		fontSize: '100%'
	},
	buddyBody: {
		position: 'absolute',
		top: '5vw',
		left: '15vw',
		fontSize: '100%',
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
