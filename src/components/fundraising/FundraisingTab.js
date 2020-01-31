import React, { Component } from 'react';

class FundraisingTab extends Component {
	render() {
		const displayStyle = this.props.activeTab === 'Fundraising' ? 'block' : 'none';

		return (
			<div className='paper' style={{ display: displayStyle }}>
				<p>You have ${this.props.availableFunds} to work with.</p>
			</div>
		);
	}
};
export default FundraisingTab;
