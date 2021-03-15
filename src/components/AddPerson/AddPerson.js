import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
    	<h3>Dodanie osoby za pomocą redux'a</h3>
    	<input onChange={props.changeInputName} type='text' placeholder='wpisz imię...' value={props.valueName}/>
    	<input onChange={props.changeInputAge} type='number' placeholder='wpisz wiek...' value={props.valueAge}/>
        <button onClick={props.personAdded}>Dodaj Osobę</button>
    </div>
);

export default addPerson;