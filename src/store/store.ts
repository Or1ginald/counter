import {combineReducers, createStore} from "redux";
import {counterReducer} from "../reducers/counter-reducer";

const rootReducer = combineReducers({
    "counterReducer": counterReducer,
})


export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store