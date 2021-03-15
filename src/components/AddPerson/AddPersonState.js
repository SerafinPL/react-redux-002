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
	return(
	    <div className="AddPerson">
	    	<h3>Dodanie osoby za pomocą Local State</h3>
	    	<input  type='text' placeholder='wpisz imię...' onChange={nameChangeHandler} value={personNameHook}/>
	    	<input  type='number' placeholder='wpisz wiek...' onChange={ageChangeHandler} value={personAgeHook}/>
	        <button onClick={() => props.personAdd(personNameHook, personAgeHook)}>Dodaj Osobę</button>
	    </div>
	);
}

export default AddPerson;