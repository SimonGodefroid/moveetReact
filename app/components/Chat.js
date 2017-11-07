import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			messages: [
				{ id: 1, message: "I'm the recipient! (The person you're talking to)" }, // Gray bubble
				{ id: 0, message: "I'm you -- the blue bubble!" }, // Blue bubble
				{ id: 0, message: 'LOL' }, // Blue bubble
				{ id: 1, message: "I'm you -- the blue bubble!" }, // Blue bubble
				{ id: 1, message: 'Fuck' }, // Blue bubble
				{ id: 1, message: 'I was convinced the id was the color' }, // Blue bubble
				{ id: 0, message: 'I was wrong' }, // Blue bubble
				{ id: 1, message: 'You too...' }, // Blue bubble
				{ id: 1, message: 'I was convinced the id was the color' }, // Blue bubble
				{ id: 0, message: 'I was wrong' }, // Blue bubble
				{ id: 1, message: 'You too...' }, // Blue bubble
				{ id: 1, message: 'I was convinced the id was the color' }, // Blue bubble
				{ id: 0, message: 'I was wrong' }, // Blue bubble
				{ id: 1, message: 'You too...' }, // Blue bubble
				{ id: 1, message: 'I was convinced the id was the color' }, // Blue bubble
				{ id: 0, message: 'I was wrong' }, // Blue bubble
				{ id: 1, message: 'You too...' }, // Blue bubble
				{ id: 1, message: 'I was convinced the id was the color' }, // Blue bubble
				{ id: 0, message: 'I was wrong' }, // Blue bubble
				{ id: 1, message: 'You too...' }, // Blue bubble
				{ id: 1, message: 'I was convinced the id was the color' }, // Blue bubble
				{ id: 0, message: 'I was wrong' }, // Blue bubble
				{ id: 1, message: 'You too...' }, // Blue bubble
				{ id: 1, message: "I'm you -- the blue bubble!" } // Blue bubble
			]
			//...
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		console.log('event.target.value', event.target.value);
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<div>Coucou chat</div>
				<div
					style={{
						border: '0.2em solid black',
						width: '30vw',
						height: '60vh',
						overflow: 'scroll',
						float: 'left',
						boxSizing: 'borderBox'
					}}
				>
					List of chats People
					<ul>
						<li>user 1</li>
						<li>user 2</li>
						<li>user 3</li>
						<li>user 4</li>
						<li>user 5</li>
						<li>user 6</li>
						<li>user 1</li>
						<li>user 2</li>
						<li>user 3</li>
						<li>user 4</li>
						<li>user 5</li>
						<li>user 6</li>
						<li>user 1</li>
						<li>user 2</li>
						<li>user 3</li>
						<li>user 4</li>
						<li>user 5</li>
						<li>user 6</li>
						<li>user 1</li>
						<li>user 2</li>
						<li>user 3</li>
						<li>user 4</li>
						<li>user 5</li>
						<li>user 6</li>
					</ul>
				</div>
				<div
					style={{
						border: '0.2em solid black',
						width: '70vw',
						height: '60vh',
						overflow: 'scroll',
						float: 'right',
						boxSizing: 'borderBox'
					}}
				>
					<ChatFeed
						messages={this.state.messages} // Boolean: list of message objects
						isTyping={this.state.is_typing} // Boolean: is the recipient typing
						hasInputField={false} // Boolean: use our input, or use your own
						showSenderName // show the name of the user who sent the message
						bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
						// JSON: Custom bubble styles
						bubbleStyles={{
							text: {
								fontSize: '1em'
							},
							chatbubble: {
								borderRadius: 70,
								padding: '1em'
							}
						}}
					/>
				</div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Message
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Chat;
