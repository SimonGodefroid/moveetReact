import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollToTop from 'react-scroll-up';
class ScrollTop extends Component {
	render() {
		return (
			<ScrollToTop showUnder={160}>
				<div className={css(styles.scrollTop)}>
					<span>^</span>
				</div>
			</ScrollToTop>
		);
	}
}

export default ScrollTop;
const styles = StyleSheet.create({
	scrollTop: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		textAlign: 'center',
		fontSize: '3em',
		width: '1em',
		height: '1em',
		color: 'white',
		lineHeight: '1.4em',
		borderRadius: '0.2em'
	}
});
