import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<div style={{ backgroundColor: 'white', color: '#e06666', marginTop: 55 }}>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default App;
