import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../action';

class Persons extends Component {
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

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdd} changeInput={this.props.changeIn}/>
                {this.props.personsState.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDel(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        personsState: state.persons
    };
};

const mapDispatchToProps = dispach => {
    return{
        personAdd: () =>        dispach({type: /*'personAdd'*/ actions.PERSON_ADD}),
        personDel: (id) =>      dispach({type: /*'personDel'*/ actions.PERSON_DEL, idety: id}),
        changeIn: (event) =>    dispach({type: /*'CHANGE'*/actions.CHANGE, event: event})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);