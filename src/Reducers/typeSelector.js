import {
  TYPESELECTOR_SELECT,
  TypeSelectorTypes
} from "../Actions/typeSelector"

const typeSelector = function(state = TypeSelectorTypes.Piano, action){
  switch(action.type){
    case TYPESELECTOR_SELECT:
      return action.selected;
    default:
      return state
  }
}

export default typeSelector
