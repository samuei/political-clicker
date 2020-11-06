import React, { useState } from 'react';
import { POLITICAL_PREFIX, POLITICAL_PARTY_NAME } from '../../util/naming_constants';

const PartyNameField = (props) => {
	const [fieldVal, setFieldVal] = useState(props.value ? props.value : '');

	// Update state on user change
	const handleValueChange = (event) => {
		let newVal = event.target.value;

		setFieldVal(newVal);
	};

	// Set the fieldVal to the value prop
	const handleReset = () => {
		setFieldVal(props.value);
	};

	// Submit new value to parent if it's acceptable
	const handleSave = () => {
		if (fieldVal !== null && fieldVal !== '') {
			props.saveFn(fieldVal);
		}
	};

	// Create a new party name from the values in the naming_constants file
	const handleRandom = (saveWhenFinished=false) => {
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

		setFieldVal(finalName);

		if (saveWhenFinished) {
			handleSave();
		}
	};


	if (!fieldVal) {
		handleRandom(true);
	}

	return (
		<div>
			<label>{props.title}: </label>
			<br />
			<input
				type='text'
				value={fieldVal}
				onChange={handleValueChange}
				maxLength={100}
				style={{
					width: fieldVal.length + 'ch',
					fontFamily: 'Lucida Sans Typewriter, Courier New, monospace',
					padding: '2px 1em'
				}}
			/>
			<button
				onClick={handleReset}
				type='button'
			>
				Reset
			</button>
			<button
				onClick={() => handleRandom(false)}
				type='button'
			>
				Random
			</button>
			<button
				onClick={handleSave}
				type='button'
			>
				Save
			</button>
		</div>
	);
};
export default PartyNameField;
