import React, { useState, useReducer } from 'react';
import NavBar from './components/NavBar';
import OverviewTab from './components/overview/OverviewTab.js';
import FundraisingTab from './components/fundraising/FundraisingTab.js';
import SettingsTab from './components/settings/SettingsTab.js';
import './App.css';

// Top level component for the application
const App = () => {
	// Reducers
	const tabListReducer = (state, action) => {
		let newTabList = state;
		if (state.includes(action.tabName)) {
			newTabList = newTabList.filter((tab) => tab !== action.tabName);
		}
		else {
			// I want settings to always be in the back, so we're gonna juggle a little
			newTabList.pop();
			newTabList.push(action.tabName);
			newTabList.push('Settings');
		}

		return newTabList;
	};

	const availableFundsReducer = (state, action) => {
		let newFunds = state ? state : 0;

		if (action.add) {
			newFunds += action.add;
		}
		else if (action.subtract) {
			newFunds -= action.subtract;
		}

		return newFunds;
	};

	// State
	const [activeTab, setActiveTab] = useState('Overview');
	const [tabList, setTabList] = useReducer(tabListReducer, ['Overview', 'Fundraising', 'Settings']);
	const [partyName, setPartyName] = useState('');
	const [oppositionPartyName, setOppositionPartyName] = useState('');
	const [availableFunds, setAvailableFunds] = useReducer(availableFundsReducer, 20);

	return (
		<div className='App'>
			<header className='right-aligned-text app-name' >
				<span className='header-text-blue'>Political</span> <span className='header-text-red'>Clicker</span>
			</header>
			<NavBar activeTab={activeTab} tabSwapFn={setActiveTab} tabList={tabList} />
			<div className='file-folder-background file-folder-body'>
				<OverviewTab
					activeTab={activeTab}
					partyName={partyName}
					oppositionPartyName={oppositionPartyName}
				/>
				<FundraisingTab
					activeTab={activeTab}
					availableFunds={availableFunds}
					updateFundsFn={setAvailableFunds}
				/>
				<SettingsTab
					activeTab={activeTab}
					partyName={partyName}
					oppositionPartyName={oppositionPartyName}
					updatePartyName={setPartyName}
					updateOppositionPartyName={setOppositionPartyName}
				/>
			</div>
		</div>
	);
};
export default App;
