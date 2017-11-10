import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
export default class Pagination extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					breakLabel={<a>...</a>}
					breakClassName={'break-me'}
					pageCount={this.props.pageCount}
					marginPagesDisplayed={1}
					pageRangeDisplayed={3}
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
