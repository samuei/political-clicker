import React, { Component }  from 'react';
import {POLITICAL_PREFIX, POLITICAL_PARTY_NAME} from '../util/naming_constants';

class PartyNameField extends Component {
	constructor(){
		super();
		
		// Default state values
		this.state = {
			fieldVal: ''
		};
		
		// Function bindings
		this.handleValueChange = this.handleValueChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleRandom = this.handleRandom.bind(this);
	}
	
	// Update state on user change
	handleValueChange(event) {
		let newVal = event.target.value;
		
		this.setState({
			fieldVal: newVal
		});
	}
	
	// Set the fieldVal to the value prop
	handleReset() {
		this.setState({
			fieldVal: this.props.value
		});
	}
	
	// Submit new value to parent if it's acceptable
	handleSave() {
		if (this.state.fieldVal !== null && this.state.fieldVal !== '') {
			this.props.saveFn(this.state.fieldVal);
		}
	}
	
	// Create a new party name from the values in the naming_constants file 
	handleRandom(saveWhenFinished=false) {
		let firstPrefix = '';
		let firstName = '';
		let secondPrefix = '';
		let secondName = '';
		
		let firstNameSeed = Math.floor(Math.random() * POLITICAL_PARTY_NAME.length); // Note the floor; This is the only mandatory piece
		firstName = POLITICAL_PARTY_NAME[firstNameSeed];
		
		let firstPrefixSeed = Math.round(Math.random() * POLITICAL_PREFIX.length * 2);
		if (firstPrefixSeed < POLITICAL_PREFIX.length) {
			firstPrefix = POLITICAL_PREFIX[firstPrefixSeed];
		}
		
		let secondNameSeed = Math.round(Math.random() * POLITICAL_PARTY_NAME.length * 3);
		if (secondNameSeed < POLITICAL_PARTY_NAME.length && secondNameSeed !== firstNameSeed) {
			secondName = POLITICAL_PARTY_NAME[secondNameSeed];
		}
		
		let secondPrefixSeed = Math.round(Math.random() * POLITICAL_PREFIX.length * 3);
		if (secondPrefixSeed < POLITICAL_PREFIX.length && secondPrefixSeed !== firstPrefixSeed && secondName !== '') {
			secondPrefix = POLITICAL_PREFIX[secondPrefixSeed];
		}
		
		let finalName = firstPrefix + firstName + 
			(
				secondName !== ''
					? ' ' + secondPrefix + secondName
					: ''
			);
		
		this.setState({
			fieldVal: finalName
		}, () => {
			if (saveWhenFinished) {
				this.handleSave();
			}
		});
	}
	
	// Initial pageview
	componentDidMount() {
		if (this.props.value) {
			this.setState({
				fieldVal: this.props.value
			});
		}
		else {
			this.handleRandom(true);
		}
	}
	
	// Subsequent pageviews (if applicable)
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value) {
			this.setState({
				fieldVal: this.props.value
			});
		}
	}
	
	render() {
		return (
			<div>
				<label>{this.props.title}: </label>
				<br />
				<input
					type='text'
					value={this.state.fieldVal}
					onChange={this.handleValueChange}
					maxLength={100}
					size={this.state.fieldVal.length}
				/>
				<button
					onClick={this.handleReset}
					type='button'
				>
					Reset
				</button>
				<button
					onClick={() => this.handleRandom(false)}
					type='button'
				>
					Random
				</button>
				<button
					onClick={this.handleSave}
					type='button'
				>
					Save
				</button>
			</div>
		);
	}
}
export default PartyNameField;