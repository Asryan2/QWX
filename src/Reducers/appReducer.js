import projectFiles from "./projectFiles"
import typeSelector from "./typeSelector"
import piano from "./piano"
import { combineReducers } from 'redux'

const AppReducer = combineReducers({
  projectFiles,
  typeSelector,
  piano,
})

export default AppReducer
