import React from 'react';
import PartyNameField from './PartyNameField';

const SettingsTab = (props) => {
	const displayStyle = props.activeTab === 'Settings' ? 'block' : 'none';

	return (
		<div className='paper' style={{ display: displayStyle }}>
			<PartyNameField
				title='Party Name'
				value={props.partyName}
				saveFn={props.updatePartyName}
			/>
			<PartyNameField
				title='Opposition Party Name'
				value={props.oppositionPartyName}
				saveFn={props.updateOppositionPartyName}
			/>
		</div>
	);
};
export default SettingsTab;
