import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer
				style={{
					backgroundColor: 'black',
					color: 'white',
					position: 'fixed',
					bottom: 0,
					fontFamily: 'Josefin Sans',
					zIndex: 1000
				}}
			>
				<p>© 2017 Moveet, Inc. All Rights Reserved.</p>
			</footer>
		);
	}
}

export default Footer;
