import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import AddPersonState from '../components/AddPerson/AddPersonState';
import * as actions from '../action';

const Persons = (props) => {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: new Date().getTime(), // not really unique but good enough here!
    //         name: 'Kuba',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    
        return (
            <div>
                <AddPerson 
                    personAdded={props.personAdd} 
                    changeInputName={props.changeInName} 
                    valueName={props.name}
                    changeInputAge={props.changeInAge} 
                    valueAge={props.age}
                />
                <AddPersonState 
                    personAdd={props.personAddLocal} 
                    
                />
                {props.personsState.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => props.personDel(person.id)}/>
                ))}
            </div>
        );
    
}

const mapStateToProps = state => {
    return{
        personsState: state.persons,
        name: state.name,
        age: state.age
    };
};

const mapDispatchToProps = dispach => {
    return{
        personAdd: () => dispach({type: /*'personAdd'*/  actions.PERSON_ADD}),
        personAddLocal: (name, age) => dispach({type: /*'personAdd'*/  actions.PERSON_ADD_LOCAL, personData :{name: name, age: age} }),
        personDel: (id) => dispach({type: /*'personDel'*/  actions.PERSON_DEL, idety: id}),
        changeInName: (event) => dispach({type: /*'CHANGE'*/     actions.CHANGE_NAME, event: event}),
        changeInAge: (event) => dispach({type: /*'CHANGE'*/     actions.CHANGE_AGE, event: event})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);