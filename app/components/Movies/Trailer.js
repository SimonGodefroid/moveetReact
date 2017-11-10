import React, { Component } from 'react';

class Trailer extends Component {
	render() {
		const { movie } = this.props;
		if ((movie.statusList === 'comingsoon' && movie.hasPreview === 1) || movie.statusList === 'nowshowing') {
			let url = movie.trailerEmbed;
			let endUrl = url.search('</iframe>');
			console.log('url', url);
			let urlTrailer =
				url.substring(0, endUrl + 9).replace("<div id='ACEmbed'>", "<div id='blogvision'>") + '</div>';
			return (
				<div style={{ textAlign: 'center' }}>
					<div dangerouslySetInnerHTML={{ __html: urlTrailer }} />
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default Trailer;
