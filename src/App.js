import React, { Component }  from 'react';
import NavBar from './components/NavBar';
import PartyNameField from './components/PartyNameField';
import './App.css';

// Top level component for the application
class App extends Component {
	constructor(){
		super();
		
		// Default state values
		this.state = {
			activeTab: 'Overview',
			partyName: '',
			oppositionPartyName: ''
		};
		
		// Function bindings
		this.tabSwapFn = this.tabSwapFn.bind(this);
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
		
		// TODO: modularize tab listing
		const tabList = ['Overview'];
		
		return (
			<div className='App'>
				<header className='right-aligned-text app-name' >
					<span className='header-text-blue'>Political</span> <span className='header-text-red'>Clicker</span>
				</header>
				<NavBar activeTab={this.state.activeTab} tabSwapFn={this.tabSwapFn} tabList={tabList} />
				<div className='file-folder-background file-folder-body'>
					<PartyNameField
						title='Party Name'
						value={this.state.partyName}
						saveFn={this.updatePartyName}
					/>
					<PartyNameField
						title='Opposition Party Name'
						value={this.state.oppositionPartyName}
						saveFn={this.updateOppositionPartyName}
					/>
				</div>
			</div>
		);
	}
}
export default App;
