import React from 'react';
import {connect} from 'react-redux';
import Messages from './Messages';
import Gallery from './Gallery';

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
          backgroundColor: 'black',
        }}
      >
        <Messages messages={this.props.messages} />
        <div className="row">
          <div style={{textAlign: 'center', fontSize: 50}}>MOVEET</div>
          <Gallery />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(Home);
