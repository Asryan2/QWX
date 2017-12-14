import projectFiles from "./projectFiles"
import typeSelector from "./typeSelector"
import piano from "./piano"
import keyEditor from "./keyEditor"
import { combineReducers } from 'redux'

const AppReducer = combineReducers({
  projectFiles,
  typeSelector,
  piano,
  keyEditor
})

export default AppReducer
