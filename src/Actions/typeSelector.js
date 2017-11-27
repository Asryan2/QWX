export const TypeSelectorTypes = {
    Piano : 0,
    Launchpad : 1,
}
export const TYPESELECTOR_SELECT = "TYPESELECTOR_SELECT"
export function typeSelectorSelect(selected){
  return {
    type:TYPESELECTOR_SELECT,
    selected
  }
}
