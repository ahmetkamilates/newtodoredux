import { ActionTypes } from "../actionTypes/todoTypes";

export const addTodo = (payload) => ({
    type:ActionTypes.ADD_TODO,
    payload
})
export const deleteTodo = (payload) => ({
    type:ActionTypes.DELETE_TODO,
    payload
})
export const updateTodo = (payload) => ({
    type:ActionTypes.UPDATE_TODO,
    payload
})
export const setTodos = (payload) => ({
    type:ActionTypes.SET_TODOS,
    payload
})