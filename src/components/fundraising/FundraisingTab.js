import React, { Component } from 'react';
import { CANVASING_ACTION } from '../../util/action_constants';

class FundraisingTab extends Component {
	constructor(){
		super();
		
		// Default state values
		this.state = {
			actionMessage: ''
		};
		
		// Function bindings
		this.begForMoney = this.begForMoney.bind(this);
	}
	
	begForMoney() {
		this.setState({
			actionMessage: CANVASING_ACTION[Math.floor(Math.random() * CANVASING_ACTION.length)]
		}, this.props.manualMoneyClick);
	}
	
	render() {
		const displayStyle = this.props.activeTab === 'Fundraising' ? 'block' : 'none';
		
		const displayActionMessage = this.state.actionMessage ? <p>{this.state.actionMessage}</p> : null;

		return (
			<div className='paper' style={{ display: displayStyle }}>
				{ displayActionMessage }
				<p>You have ${this.props.availableFunds} to work with.</p>
				<button
					onClick={this.begForMoney}
					type='button'
					title='Beg random strangers for money on the street'
				>
					Canvas for Donations
				</button>
			</div>
		);
	}
};
export default FundraisingTab;
