import {
  TYPESELECTOR_SELECT,
  TYPESELECTOR_TAB,
  TypeSelectorTypes
} from "../Actions/typeSelector"

const typeSelector = function(state = TypeSelectorTypes.Edit, action){
  switch(action.type){
    case TYPESELECTOR_SELECT:
      return action.selected;
      case TYPESELECTOR_TAB:
        return (state == TypeSelectorTypes.Edit)? TypeSelectorTypes.Play: TypeSelectorTypes.Edit;
    default:
      return state
  }
}

export default typeSelector
