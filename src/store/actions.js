import { ADD_TODOS, SET_TODO_INPUT } from "./constants";

export const setTodoInput = payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export const addTodos = payload => {
    return {
        type: ADD_TODOS,
        payload
    }
}