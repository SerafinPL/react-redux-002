import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
    	<input onChange={props.changeInput} type='text' placeholder='wpisz imię...'/>
        <button onClick={props.personAdded}>Dodaj Osobę</button>
    </div>
);

export default addPerson;