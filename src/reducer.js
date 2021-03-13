import * as actions from './action';

const initialState = {
        persons: []
    }

const reducer = (state = initialState, action) => {

	switch (action.type) {
		//case 'personAdd':
		case actions.personAdd:

			const newPerson = {
             	id: new Date().getTime(), // not really unique but good enough here!
             	name: 'Kuba',
             	age: Math.floor( Math.random() * 40 )
         	}
         	return{
				...state,
				persons: state.persons.concat(newPerson)

			}

		//case 'personDel':
		case actions.personDel:

			return{
				...state,
				persons: state.persons.filter(person => person.id !== action.idety)
			}
	}
	
	return state;
}

export default reducer;