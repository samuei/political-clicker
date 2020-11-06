import React from 'react';

const OverviewTab = (props) => {
	const displayStyle = props.activeTab === 'Overview' ? 'block' : 'none';

	return (
		<div className='paper' style={{ display: displayStyle }}>
			<p>You haven't done anything noteworthy, citizen.</p>

			<p>The {props.partyName} Party is just you.</p>

			<p>The {props.oppositionPartyName} Party rules unopposed.</p>
		</div>
	);
};
export default OverviewTab;
