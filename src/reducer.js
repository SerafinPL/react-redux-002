import * as actions from './action';

const initialState = {
        persons: [],
        name: ''
    }

const reducer = (state = initialState, action) => {

	switch (action.type) {
		//case 'personAdd':
		case actions.PERSON_ADD:

			const newPerson = {
             	id: new Date().getTime(), // not really unique but good enough here!
             	name: state.name,
             	age: Math.floor( Math.random() * 50 )
         	}

         	return{
         		...state,
				name: '',
				persons: state.persons.concat(newPerson)

			}

		//case 'personDel':
		case actions.PERSON_DEL:

			return{
				...state,
				persons: state.persons.filter(person => person.id !== action.idety)
			}
		//case 'CHANGE':
		case actions.CHANGE:
			
			return{ 
				...state,
				name: action.event.target.value
			}
	} // switch
	
	return state;
}

export default reducer;