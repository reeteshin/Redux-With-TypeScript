import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { Reducer } from './Reducer'

const rootreducer = combineReducers({apireducer:Reducer})
export const store = createStore(rootreducer,applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch