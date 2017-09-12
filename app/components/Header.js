import React from 'react';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

class Header extends React.Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const active = {borderBottomColor: '#3f51b5'};
    const rightNav = this.props.token ? (
      <ul
        className="nav navbar-nav navbar-right"
        style={{backgroundColor: 'black'}}
      >
        <li className="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="navbar-avatar dropdown-toggle"
          >
            <img
              src={this.props.user.picture || this.props.user.gravatar}
            />{' '}
            {this.props.user.name ||
              this.props.user.email ||
              this.props.user.id}{' '}
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
      <ul className="nav navbar-nav navbar-right ">
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
        }}
      >
        <div className="container">
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
            <ul className="nav navbar-nav">
              <li>
                <IndexLink to="/" activeStyle={active}>
                  HOME
                </IndexLink>
              </li>
              <li>
                <Link to="/contact" activeStyle={active}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/other" activeStyle={active}>
                  Other
                </Link>
              </li>
              {/* <li><Link to="/contact" activeStyle={active}>Contact</Link></li> */}
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
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Header);