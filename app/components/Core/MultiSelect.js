import React, { Component } from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' }
];

const WHY_WOULD_YOU = [{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true }].concat(
	FLAVOURS.slice(1)
);

class MultiSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			crazy: false,
			value: [],
			rtl: false
		};
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
		this.toggleRtl = this.toggleRtl.bind(this);
	}

	handleSelectChange(value) {
		console.log("You've selected:", value);
		this.setState({ value: value });
	}

	toggleCheckbox(e) {
		this.setState({
			[e.target.name]: e.target.checked
		});
	}

	toggleRtl(e) {
		let rtl = e.target.checked;
		this.setState({ rtl });
	}

	render() {
		const { crazy, disabled, stayOpen, value } = this.state;
		const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
		return (
			<div className="section">
				<h3 className="section-heading">
					{this.props.label}{' '}
					<a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/Multiselect.js">
						(Source)
					</a>
					Choisir les genres
				</h3>
				<Select
					closeOnSelect={false}
					disabled={false}
					multi={true}
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Sélectionnez les genres"
					removeSelected={true}
					simpleValue
					value={value}
				/>
			</div>
		);
	}
}
propTypes: {
	label: PropTypes.string;
}
export default MultiSelect;
