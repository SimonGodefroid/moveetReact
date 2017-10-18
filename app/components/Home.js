import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import Gallery from './Gallery';
import Landing from './Landing';

//<Link to={`/room/${this.props.roomid}`}>

// app
// <Route path="room/:id" component={RoomContainer} />

class Home extends React.Component {
	render() {
		return (
			<div
				className="container-fluid"
				style={{
					marginTop: 55,
					backgroundColor: ''
				}}
			>
				<Messages messages={this.props.messages} />
				<div className="row">
					<Landing />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		messages: state.messages
	};
};

export default connect(mapStateToProps)(Home);
