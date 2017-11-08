import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import Profile from './components/Account/Profile';
import Forgot from './components/Account/Forgot';
import Reset from './components/Account/Reset';
import Movies from './components/Movies';
import Landing from './components/Landing';
import Buddies from './components/Buddies';
import Theaters from './components/Theaters';
import Theater from './components/Theater';
import Events from './components/Events';
import Chat from './components/Chat';
import Movie from './components/Movie';
import Buddy from './components/Buddy';
// import BuddiesResults from './components/BuddiesResults';
import BuddyFinderResults from './components/BuddyFinderResults';
// import MatchesResults from './components/MatchesResults';
// import ShowtimesResults from './components/ShowtimesResults';

export default function getRoutes(store) {
	const ensureAuthenticated = (nextState, replace) => {
		if (!store.getState().auth.token) {
			replace('/login');
		}
	};
	const skipIfAuthenticated = (nextState, replace) => {
		if (store.getState().auth.token) {
			replace('/');
		}
	};
	const clearMessages = () => {
		store.dispatch({
			type: 'CLEAR_MESSAGES'
		});
	};
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} onLeave={clearMessages} />
			<Route path="/movies" component={Movies} onLeave={clearMessages} pageTitle={'Films'} />
			<Route
				path="/buddies"
				component={Buddies}
				onEnter={ensureAuthenticated}
				onLeave={clearMessages}
				title={'Buddies'}
			/>
			<Route path="/theaters" component={Theaters} onEnter={ensureAuthenticated} onLeave={clearMessages} />
			<Route path="/events" component={Events} onEnter={ensureAuthenticated} onLeave={clearMessages} />
			<Route path="/chat" component={Chat} onEnter={ensureAuthenticated} onLeave={clearMessages} />
			<Route path="/contact" component={Contact} onLeave={clearMessages} />
			<Route path="/login" component={Login} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			<Route path="/signup" component={Signup} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			<Route path="/account" component={Profile} onEnter={ensureAuthenticated} onLeave={clearMessages} />
			<Route path="/forgot" component={Forgot} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			<Route path="/reset/:token" component={Reset} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			{/*<Route path="/movies/:genre" component={Movies} />*/}
			{/*<Route path="/results/buddies/movie/:id(/^[a-f\d]{24}$/i)" component={BuddyFinderResults} />*/}
			{/*<Route path="/results/buddies/:id(/^[a-f\d]{24}$/i)" component={BuddiesResults} />*/}
			{/* tous les utilisateurs qui veulent voir un film en particulier */}
			{/*<Route path="/results/buddies/matches/:id(/^[a-f\d]{24}$/i)" component={MatchesResults} />*/}
			{/* les utilisateurs qui ont des films en commun avec toi */}
			{/*<Route path="/results/showtimes/:id(/^[a-f\d]{24}$/i)" component={ShowtimesResults} />*/}
			{/* les horaires pour un film en particulier dans tous les cinémas */}*/}
			<Route path="/movies/:id(/^[a-f\d]{24}$/i)" component={Movie} />
			<Route
				path="/buddies/:id(/^[a-f\d]{24}$/i)"
				onEnter={ensureAuthenticated}
				component={Buddy}
				title={'Buddies'}
			/>
			<Route
				path="/findbuddy/:id(/^[a-f\d]{24}$/i)"
				onEnter={ensureAuthenticated}
				component={BuddyFinderResults}
				title={'Buddy Finder'}
			/>
			<Route path="/theaters/:id(/^[a-f\d]{24}$/i)" onEnter={ensureAuthenticated} component={Theater} />
			<Route path="*" component={NotFound} onLeave={clearMessages} />
		</Route>
	);
}
