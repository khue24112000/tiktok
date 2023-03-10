import { ADD_TODOS, SET_TODO_INPUT } from "./constants"

const initState = {
    Todos: [],
    TodoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                TodoInput: action.payload
            }
        case ADD_TODOS:
            return {
                ...state,
                Todos: [...state.Todos, action.payload]
            }
        default:
            throw new Error('Invalid Action')
    }
}

export { initState }
export default reducer