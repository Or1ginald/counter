import {combineReducers, createStore} from "redux";
import {counterReducer} from "../reducers/counter-reducer";
import {counterMenuReducer} from "../reducers/counter-menu-reducer";

const rootReducer = combineReducers({
    "counterReducer": counterReducer,
    "counterMenuReducer": counterMenuReducer,
})


export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store