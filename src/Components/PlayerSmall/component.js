import React from 'react'
import "./Styles/style.css"
import PlayButton from "../PlayButton/component"
import StopButton from "../StopButton/component"
class PlayerSmall extends React.Component {
 render() {
   if(this.props.isPlaying){
     this.style = {
      background: "rgba(104,0,38,0.3)"
     }
   }
   else{
     this.style = {
      background: "rgba(0,17,56,0.3)"
     } 
   }
  return (
    <div id="playerSmall"
      style={this.style}
         className={this.props.className + " unselectable"}>
       <PlayButton
         isPlaying={this.props.isPlaying}
         onPlayPause={() => this.props.onPlayPause(this.props.id)}/>
       <StopButton
         onStopped={() => this.props.onStopped(this.props.id)}/>
      <div id="playerSmall-path"
        onClick={() => this.props.onPlayPause(this.props.id)}>
        <span>{this.props.path}</span>
      </div>
    </div>
  );
 }
}
export default PlayerSmall;
