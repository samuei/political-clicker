import React, { Component } from 'react';
import PartyNameField from './PartyNameField';

class SettingsTab extends Component {
	render() {
		const displayStyle = this.props.activeTab === 'Settings' ? 'block' : 'none';

		return (
			<div className='paper' style={{ display: displayStyle }}>
				<PartyNameField
					title='Party Name'
					value={this.props.partyName}
					saveFn={this.props.updatePartyName}
				/>
				<PartyNameField
					title='Opposition Party Name'
					value={this.props.oppositionPartyName}
					saveFn={this.props.updateOppositionPartyName}
				/>
			</div>
		);
	}
};
export default SettingsTab;
