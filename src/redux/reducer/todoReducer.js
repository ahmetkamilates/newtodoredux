import { ActionTypes } from "../actionTypes/todoTypes"

const initialState = {
    todos: [],
    isEmpty: true
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            const clone =[...state.todos]
            clone.unshift(action.payload)
            return { ...state, todos: clone, isEmpty: false }
        case ActionTypes.DELETE_TODO:
            const filtred = state.todos.filter((i) => i.id !== action.payload)
            const isEmpty = filtred.length === 0
            return { ...state, todos: filtred, isEmpty: isEmpty }
            case ActionTypes.UPDATE_TODO:
                const updated = state.todos.map((item) => 
                item.id === action.payload.id ? action.payload : item)
            return {...state,todos:updated}
            case ActionTypes.SET_TODOS:
                const is_empty = action.payload.length === 0
                return{...state,todos:action.payload,isEmpty:is_empty}
        default: return state
    }
}
export default todoReducer