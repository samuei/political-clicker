import React, { useState } from 'react';
import { CANVASING_ACTION } from '../../util/action_constants';

const FundraisingTab = ({activeTab = false, availableFunds = 0, updateFundsFn}) => {
	const [actionMessage, setActionMessage] = useState('');

	const begForMoney = () => {
		let amount = Math.round(Math.random() * 10);

		setActionMessage(CANVASING_ACTION[Math.floor(Math.random() * CANVASING_ACTION.length)]);

		updateFundsFn({add: amount});
	};

	const displayStyle = activeTab === 'Fundraising' ? 'block' : 'none';

	const displayActionMessage = actionMessage
		? <p>{actionMessage}</p>
		: <p>You should probably raise some money</p>;

	return (
		<div className='paper' style={{ display: displayStyle }}>
			{ displayActionMessage }
			<p>You have ${availableFunds} to work with.</p>
			<button
				onClick={begForMoney}
				type='button'
				title='Beg random strangers for money on the street'
			>
				Canvas for Donations
			</button>
		</div>
	);
};
export default FundraisingTab;
