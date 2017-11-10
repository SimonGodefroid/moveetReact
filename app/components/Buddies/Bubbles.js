import React, { Component } from 'react';

export default class Bubbles extends Component {
	render() {
		const { buddies } = this.props;
		if (buddies.length > 0) {
			const resBubbles = buddies.map((buddy, index) => {
				return (
					<div key={index}>
						{/*Tooltip*/}
						<a
							key={index}
							href={`/buddies/${buddy._id}`}
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
									top: '5em',
									// bottom: 100,
									border: 'white 0.2em solid'
									// left: (index + 1) * 40,
								}}
							/>
						</a>
					</div>
				);
			});
			return (
				<div>
					<p>Ils veulent voir ce film</p>
					{resBubbles}
				</div>
			);
		} else {
			return <div>Pas de buddies pour ce film</div>;
		}
	}
}
