import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

class Header extends React.Component {
	handleLogout(event) {
		event.preventDefault();
		this.props.dispatch(logout());
	}

	render() {
		const active = { borderBottom: 'solid 0.02em white', lineHeight: '1em' };
		const rightNav = this.props.token ? (
			<ul
				className="nav navbar-nav navbar-right"
				style={{
					backgroundColor: 'black',
					paddingTop: '0 !important',
					paddingBottom: '0 !important'
				}}
			>
				<li className="dropdown">
					<a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
						{console.log('this.props HEADER', this.props)}
						<img src={this.props.user ? this.props.user.picture || this.props.user.gravatar : ''} />
						{this.props.user
							? this.props.user.name || this.props.user.email || this.props.user.id
							: ''}{' '}
						<i className="caret" />
					</a>
					<ul className="dropdown-menu">
						<li>
							<Link to="/account">My Account</Link>
						</li>
						<li className="divider" />
						<li>
							<a href="#" onClick={this.handleLogout.bind(this)}>
								Logout
							</a>
						</li>
					</ul>
				</li>
			</ul>
		) : (
			<ul className="nav navbar-nav navbar-right " style={{ fontFamily: 'Josefin Sans' }}>
				<li>
					<Link to="/login" activeStyle={active}>
						Log in
					</Link>
				</li>
				<li>
					<Link to="/signup" activeStyle={active}>
						Sign up
					</Link>
				</li>
			</ul>
		);
		return (
			<nav
				className="navbar navbar-static-top navbar-fixed-top navbar-inverse"
				style={{
					backgroundColor: 'black',
					color: 'white',
					borderWidth: '0 0 4px 0',
					textAlign: 'center',
					fontFamily: 'Josefin Sans',
					fontSize: '1.2em'
				}}
			>
				<div className="container-fluid">
					<div className="navbar-header">
						<button
							type="button"
							data-toggle="collapse"
							data-target="#navbar"
							className="navbar-toggle collapsed"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<IndexLink to="/" className="navbar-brand">
							MOVEET
						</IndexLink>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul
							className="nav navbar-nav"
							style={{
								textAlign: 'center',
								display: 'inline-block',
								float: 'none',
								verticalAlign: 'top'
							}}
						>
							<li>
								<IndexLink to="/movies" activeStyle={active}>
									FILMS
								</IndexLink>
							</li>
							{/*<li>
								<Link to="/theaters" activeStyle={active}>
									SALLES
								</Link>
							</li>*/}
							{/*<li>
								<Link to="/events" activeStyle={active}>
									EVENEMENTS
								</Link>
							</li>*/}
							<li>
								<Link to="/buddies" activeStyle={active}>
									BUDDIES
								</Link>
							</li>
							<li>
								<Link to="/chat" activeStyle={active}>
									CHAT
								</Link>
							</li>
						</ul>
						{rightNav}
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(Header);
