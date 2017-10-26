import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				new Message({ id: 1, message: "I'm the recipient! (The person you're talking to)" }), // Gray bubble
				new Message({ id: 0, message: "I'm you -- the blue bubble!" }) // Blue bubble
			]
			//...
		};
	}
	render() {
		return (
			<div>
				<div>Coucou chat</div>
				<ChatFeed
					style={{ width: '40em' }}
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
		);
	}
}

export default Chat;
