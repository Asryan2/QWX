import React from 'react'
import "./Styles/style.css"
class ContainerHeader extends React.Component {
 render() {
  return (
    <div id="containerHeader" className={"unselectable "+this.props.className}>
      {this.props.text}
    </div>
  );
 }
}
export default ContainerHeader;
