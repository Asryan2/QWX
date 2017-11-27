import React from 'react'
import "./Styles/style.css"
import TypeSelector from "../TypeSelector/component"
class Topbar extends React.Component {
 render() {
  return (
    <div id="topbar">
      <TypeSelector handleClick={this.props.actions.selectType} selected={this.props.typeSelector} className="centered"/>
    </div>
  );
 }
}
export default Topbar
