import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
    	<input onChange={props.changeInputName} type='text' placeholder='wpisz imię...' value={props.valueName}/>
    	<input onChange={props.changeInputAge} type='text' placeholder='wpisz wiek...' value={props.valueAge}/>
        <button onClick={props.personAdded}>Dodaj Osobę</button>
    </div>
);

export default addPerson;