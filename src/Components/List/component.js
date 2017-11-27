import React from 'react'
import "./Styles/style.css"
class List extends React.Component {
 render() {
   const children = this.props.children
   const isHorizontal = this.props.orientation === "horizontal"
   let liStyle = {};
   if(isHorizontal)
     liStyle = {marginRight: this.props.distance}
   else
      liStyle = {marginBottom: this.props.distance}
  return (
    <ul id="list" className={this.props.className + " " + (isHorizontal? "list-horizontal" : "list-vertical")}>
      {React.Children.map(children, (child, i) => {
          return <li className="list-element" style={liStyle}>{child}</li>
      })}
    </ul>
  );
 }
}
export default List;
