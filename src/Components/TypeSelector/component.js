import React from 'react'
import "./Styles/style.css"
import { TypeSelectorTypes } from "../../Actions/typeSelector"
class TypeSelector extends React.Component {

 render() {
   const isPianoSelected = this.props.selected === TypeSelectorTypes.Piano;
   const isLaunchpadSelected = this.props.selected === TypeSelectorTypes.Launchpad;
  return (
    <div className={this.props.className} id="typeSelector">
      <div onClick={()=>{ this.props.handleClick(TypeSelectorTypes.Piano) }} className={'typeText unselectable' + (isPianoSelected? ' selected': '')}>Piano</div>
      <div className="separator typeText-separator"/>
      <div onClick={()=>{ this.props.handleClick(TypeSelectorTypes.Launchpad) }} className={'typeText unselectable' + (isLaunchpadSelected? ' selected': '')}>Launchpad</div>
    </div>
  );
 }
}
export default TypeSelector;
