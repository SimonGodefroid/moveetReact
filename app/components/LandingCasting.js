import React, { Component } from 'react';
import LandingItem from './LandingItem';
const newItems = [
	{ title: 'Acteur cherche réalisateur 1', body: 'Title 1', image: '', link: 'www.google.fr' },
	{ title: 'Acteur cherche réalisateur 2', body: 'Title 2', image: '', link: 'www.google.fr' },
	{ title: 'Acteur cherche réalisateur 3', body: 'Title 3', image: '', link: 'www.google.fr' },
	{ title: 'Acteur cherche réalisateur 4', body: 'Title 4', image: '', link: 'www.google.fr' }
];
const adsItems = [
	{ title: 'Annonce 1', body: 'Looking for a director 1', image: '', link: 'www.google.fr' },
	{ title: 'Annonce 2', body: 'Looking for a director 2', image: '', link: 'www.google.fr' },
	{ title: 'Annonce 3', body: 'Looking for a director 3', image: '', link: 'www.google.fr' },
	{ title: 'Annonce 4', body: 'Looking for a director 4', image: '', link: 'www.google.fr' }
];
const eventsItems = [
	{ title: 'Event 1', body: 'Premiere of the movie 1', image: '', link: 'www.google.fr' },
	{ title: 'Event 2', body: 'Premiere of the movie 2', image: '', link: 'www.google.fr' },
	{ title: 'Event 3', body: 'Premiere of the movie 3', image: '', link: 'www.google.fr' },
	{ title: 'Event 4', body: 'Premiere of the movie 4', image: '', link: 'www.google.fr' }
];

class LandingCasting extends Component {
	render() {
		return (
			<div>
				<LandingItem title="Sorties" items={newItems} />
				<LandingItem title="Annonces" items={adsItems} />
				<LandingItem title="Événements" items={eventsItems} />
			</div>
		);
	}
}

export default LandingCasting;
