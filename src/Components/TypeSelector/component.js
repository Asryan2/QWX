import React from 'react'
import "./Styles/style.css"
import { TypeSelectorTypes } from "../../Actions/typeSelector"
class TypeSelector extends React.Component {

 render() {
   const isPianoSelected = this.props.selected === TypeSelectorTypes.Edit;
   const isLaunchpadSelected = this.props.selected === TypeSelectorTypes.Play;
  return (
    <div className={this.props.className} id="typeSelector">
      <div onClick={()=>{ this.props.handleClick(TypeSelectorTypes.Edit) }} className={'typeText unselectable' + (isPianoSelected? ' selected': '')}>Edit Mode</div>
      <div className="separator typeText-separator"/>
      <div onClick={()=>{ this.props.handleClick(TypeSelectorTypes.Play) }} className={'typeText unselectable' + (isLaunchpadSelected? ' selected': '')}>Play Mode</div>
    </div>
  );
 }
}
export default TypeSelector;
