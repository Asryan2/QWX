import projectFiles from "./projectFiles"
import typeSelector from "./typeSelector"
import { combineReducers } from 'redux'

const AppReducer = combineReducers({
  projectFiles,
  typeSelector
})

export default AppReducer
