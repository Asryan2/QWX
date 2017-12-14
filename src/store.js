import AppReducer from './Reducers/appReducer'
import { createStore } from 'redux'

let store = createStore(AppReducer)
export default store;
