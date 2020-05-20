import { applyMiddleware, combineReducers, createStore, Store } from "redux"
import thunk from "redux-thunk"

import taskReducer from './tasks/reducer'
import modalReducer from './modal/reducer'
import AppState from "./AppState"

const rootReducer = combineReducers<AppState>({
    tasks: taskReducer,
    modal: modalReducer
})

const configureStore = (): Store<AppState> => createStore(rootReducer, undefined, applyMiddleware(thunk))

export default configureStore