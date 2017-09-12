import React, {Component} from 'react';

class Poster extends Component {
  render() {
    return <img src={this.props.url} height="200" width="150" />;
  }
}

export default Poster;
