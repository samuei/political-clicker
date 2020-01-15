import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SettingsTab from './components/settings/SettingsTab.js';
import './App.css';

// Top level component for the application
class App extends Component {
	constructor(){
		super();
		
		// Default state values
		this.state = {
			activeTab: 'Overview',
			tabList: ['Overview', 'Settings'],
			partyName: '',
			oppositionPartyName: ''
		};
		
		// Function bindings
		this.tabSwapFn = this.tabSwapFn.bind(this);
		this.tabPopulateFn = this.tabPopulateFn.bind(this);
		this.updatePartyName = this.updatePartyName.bind(this);
		this.updateOppositionPartyName = this.updateOppositionPartyName.bind(this);
	}
	
	// Swaps active tab to the selected argument
	tabSwapFn(targetTabName) {
		if (targetTabName && targetTabName.length && targetTabName !== this.state.activeTab) {
			this.setState({
				activeTab: targetTabName
			});
		}
	}
	
	// Insert or delete tab to the navbar
	tabPopulateFn(tabName) {
		if (tabName) {
			let newTabList = this.state.tabList;
			if (this.state.tabList.includes(tabName)) {
				newTabList = newTabList.filter((tab) => tab !== tabName);
			}
			else {
				// I want settings to always be in the back, so we're gonna juggle a little
				newTabList.pop();
				newTabList.push(tabName);
				newTabList.push('Settings');
			}
		}
	}
	
	updatePartyName(nameString) {
		if (nameString !== null && nameString.length) {
			this.setState({
				partyName: nameString
			});
		}
	}
	
	updateOppositionPartyName(nameString) {
		if (nameString !== null && nameString.length) {
			this.setState({
				oppositionPartyName: nameString
			});
		}
	}
	
	render() {
		return (
			<div className='App'>
				<header className='right-aligned-text app-name' >
					<span className='header-text-blue'>Political</span> <span className='header-text-red'>Clicker</span>
				</header>
				<NavBar activeTab={this.state.activeTab} tabSwapFn={this.tabSwapFn} tabList={this.state.tabList} />
				<div className='file-folder-background file-folder-body'>
					<SettingsTab
						activeTab={this.state.activeTab}
						partyName={this.state.partyName}
						oppositionPartyName={this.state.oppositionPartyName}
						updatePartyName={this.updatePartyName}
						updateOppositionPartyName={this.updateOppositionPartyName}
					/>
				</div>
			</div>
		);
	}
}
export default App;
