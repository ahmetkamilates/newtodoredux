import { createStore, combineReducers } from "redux";
import todoReducer from "./reducer/todoReducer";
import categoryReducer from "./reducer/categoryReducer";

const rootReducer = combineReducers({
    todoReducer,
    categoryReducer
})

export default createStore(rootReducer)