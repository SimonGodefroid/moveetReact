import React, { Component } from 'react';
import Api from '../Api';
import ScrollTop from './Core/ScrollTop';

class Theater extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theaters: []
		};
	}
	componentDidMount() {
		Api.getAllTheaters(json => {
			this.setState({ theaters: json.message });
		});
	}

	renderTheaters(theaters) {
		const theaterRes = theaters.map((theater, index) => {
			return (
				<div key={index}>
					<p>{theater.name}</p>
				</div>
			);
		});
		return theaterRes;
	}

	render() {
		return (
			<div className="container" style={{ fontFamily: 'Quicksand' }}>
				<div className="row">
					<div
						style={{
							height: '100vh',
							marginTop: 55
						}}
					>
						{this.renderTheaters(this.state.theaters)}
					</div>
				</div>
			</div>
		);
	}
}

export default Theater;
