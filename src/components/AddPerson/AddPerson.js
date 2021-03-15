import React from 'react';

import './AddPerson.css';

const addPerson = (props) => {



	const onEnter = (event) => {
		
		if (event.keyCode == 13) {
			props.personAdded();
			console.log(event.keyCode)
		}
	}

	return (
	    <div className="AddPerson">
	    	<h3>Dodanie osoby za pomocą redux'a</h3>
	    	<input onChange={props.changeInputName} type='text' placeholder='wpisz imię...' value={props.valueName} onKeyDown={(event) => onEnter(event)}/>
	    	<input onChange={props.changeInputAge} type='number' placeholder='wpisz wiek...' value={props.valueAge} onKeyDown={(event) => onEnter(event)}/>
	        <button onClick={props.personAdded}>Dodaj Osobę</button>
	    </div>
	);
}

export default addPerson;