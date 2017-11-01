import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
class Pagination extends Component {
	render() {
		console.log('this', this.props);
		return (
			<div style={{ textAlign: 'center' }}>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					breakLabel={<a>...</a>}
					breakClassName={'break-me'}
					pageCount={this.props.pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={data => {
						this.props.handlePageClickFn(data);
					}}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
					forcePage={this.props.forcePage}
				/>
			</div>
		);
	}
}

export default Pagination;
