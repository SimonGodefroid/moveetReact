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
import Events from './components/Events';
import Chat from './components/Chat';

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
			<Route path="/landing" component={Landing} onLeave={clearMessages} />
			<Route path="/buddies" component={Buddies} onLeave={clearMessages} />
			<Route path="/theaters" component={Theaters} onLeave={clearMessages} />
			<Route path="/events" component={Events} onLeave={clearMessages} />
			<Route path="/chat" component={Chat} onLeave={clearMessages} />
			<Route path="/contact" component={Contact} onLeave={clearMessages} />
			<Route path="/login" component={Login} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			<Route path="/signup" component={Signup} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			<Route path="/account" component={Profile} onEnter={ensureAuthenticated} onLeave={clearMessages} />
			<Route path="/forgot" component={Forgot} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			<Route path="/reset/:token" component={Reset} onEnter={skipIfAuthenticated} onLeave={clearMessages} />
			<Route path="/movies/:genre" component={Movies} />
			<Route path="*" component={NotFound} onLeave={clearMessages} />
		</Route>
	);
}
