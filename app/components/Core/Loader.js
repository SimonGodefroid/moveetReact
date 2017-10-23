import React, { Component } from 'react';
import MDSpinner from 'react-md-spinner';

class Loader extends Component {
	render() {
		return (
			<div style={{ height: '100vh', width: '100vw', textAlign: 'center', paddingTop: '3em' }}>
				<MDSpinner size={100} />
			</div>
		);
	}
}

export default Loader;
