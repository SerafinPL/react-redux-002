import React, {useState}from 'react';

import './AddPerson.css';

const AddPerson = (props) => {

	const [personNameHook, personNameSetHook] = useState('');
	const [personAgeHook, personAgeSetHook] = useState(0);

	const nameChangeHandler = (event) => {
		personNameSetHook(event.target.value);
		console.log(personNameHook);
	}

	const ageChangeHandler = (event) => {
		personAgeSetHook(event.target.value);
		console.log(personAgeHook);
	}

	const makePerson = () => {
				props.personAdd(personNameHook, personAgeHook);
					personNameSetHook('');
					personAgeSetHook(0);
	}

	const onEnter = (event) => {
		
		if (event.keyCode == 13) {
			makePerson();
		}
	}
	
	return(
	    <div className="AddPerson">
	    	<h3>Dodanie osoby za pomocą Local State</h3>
	    	<input  type='text' placeholder='wpisz imię...' onChange={nameChangeHandler} value={personNameHook} onKeyDown={(event) => onEnter(event)}/>
	    	<input  type='number' placeholder='wpisz wiek...' onChange={ageChangeHandler} value={personAgeHook} onKeyDown={(event) => onEnter(event)}/>
	        <button onClick={makePerson}>Dodaj Osobę</button>
	    </div>
	);
}

export default AddPerson;