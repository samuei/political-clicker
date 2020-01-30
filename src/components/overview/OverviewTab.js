import React, { Component } from 'react';

class OverviewTab extends Component {
	render() {
		const displayStyle = this.props.activeTab === 'Overview' ? 'block' : 'none';

		return (
			<div className='paper' style={{ display: displayStyle }}>
				<p>You haven't done anything noteworthy, citizen.</p>

				<p>The {this.props.partyName} Party is just you.</p>

				<p>The {this.props.oppositionPartyName} Party rules unopposed.</p>
			</div>
		);
	}
};
export default OverviewTab;
