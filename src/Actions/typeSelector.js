export const TypeSelectorTypes = {
    Edit : 0,
    Play : 1,
}
export const TYPESELECTOR_SELECT = "TYPESELECTOR_SELECT"
export function typeSelectorSelect(selected){
  return {
    type:TYPESELECTOR_SELECT,
    selected
  }
}

export const TYPESELECTOR_TAB = "TYPESELECTOR_TAB"
export function typeSelectorTab(){
  return {
    type:TYPESELECTOR_TAB
  }
}
