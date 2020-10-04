import {applyMiddleware, combineReducers, createStore} from "redux";
import ratesReducer from "./reducers/rates-reducer";
import thunkMiddleware from 'redux-thunk';



const rootReducer = combineReducers({
    rates: ratesReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.__store__ = store

export default store
