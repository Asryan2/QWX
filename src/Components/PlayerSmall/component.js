import React from 'react'
import "./Styles/style.css"
import PlayButton from "../PlayButton/component"
import StopButton from "../StopButton/component"
class PlayerSmall extends React.Component {
  animatePathElement(){
    this.pathElementAnimation = setInterval(()=>{
      let marginLeftLength = this.pathElement.style.marginLeft.length;
      if(marginLeftLength === 0)
        this.pathElement.style.marginLeft = "0px"
      let marginLeftInt = parseInt(this.pathElement.style.marginLeft.substring(0, this.pathElement.style.marginLeft.length-2), 10)
      if(this.pathElement.offsetWidth - this.pathWrapper.offsetWidth + marginLeftInt > -10){
        this.pathElement.style.marginLeft = marginLeftInt - 10 + "px"
      }


    },200);
  }
  unanimatePathElement(){

    clearInterval(this.pathElementAnimation);
    this.pathElement.style.marginLeft = "0px";
  }
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
   let percentBarStyle={
     background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) " + Math.round(this.props.percentCompleted*100) +"%, rgba(0,0,0,0)" + Math.round(this.props.percentCompleted*100) + "%)"
   }
  return (
    <div
      style={this.style}
         className={this.props.className + " unselectable playerSmall"}>
       <PlayButton
         isPlaying={this.props.isPlaying}
         onPlayPause={() => this.props.onPlayPause(this.props.id)}/>
       <StopButton
         onStopped={() => this.props.onStopped(this.props.id)}/>
      <div className="playerSmall-path"
        onMouseOver={() => this.animatePathElement.bind(this)()}
        onMouseOut={() => this.unanimatePathElement.bind(this)()}
        onClick={() => this.props.onPlayPause(this.props.id)}
        ref={(el) => this.pathWrapper = el}
        style={percentBarStyle}>
        <span ref={(el) => this.pathElement = el}>{this.props.path}</span>
      </div>
    </div>
  );
 }
}
export default PlayerSmall;
