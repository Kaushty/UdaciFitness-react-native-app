import { ADD_ENTRY, RECEIVE_ENTRY } from '../actions'

const entries = (state = {}, action) => {
	switch(action.type){
		case ADD_ENTRY:
			return {
				...state,
				...action.entry,
			}
		case RECEIVE_ENTRY:
			return {
				...state,
				...action.entries
			}
		default:
			return state
	}
}

export default entries