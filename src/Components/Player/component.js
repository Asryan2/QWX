import React from 'react'
import "./Styles/style.css"
import PlayButton from "../PlayButton/component"
import StopButton from "../StopButton/component"
class Player extends React.Component {
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
  return (

    <div
      style={this.style}
         className={this.props.className + " unselectable player"}>
       <PlayButton
         isPlaying={this.props.isPlaying}
         onPlayPause={() => this.props.onPlayPause(this.props.id)}/>
       <StopButton
         onStopped={() => this.props.onReload(this.props.id)}/>
      <div className="player-path"
        onMouseOver={() => this.animatePathElement.bind(this)()}
        onMouseOut={() => this.unanimatePathElement.bind(this)()}
        onClick={() => this.props.onPlayPause(this.props.id)}
        ref={(el) => this.pathWrapper = el}>
        <span ref={(el) => this.pathElement = el}>{this.props.path}</span>
      </div>
      <div className="player-selectIsLoop">
        <input type="checkbox" onChange={(e)=> this.props.onIsLoopChanged(this.props.id)} checked={this.props.isLoop}/>
      </div>
      <div className="player-selectFrom">
        <input onChange={(e)=> this.props.onFromChanged(e.target.value, this.props.id)} type="text" value={this.props.from}/>
      </div>
      <div className="player-selectTo">
        <input onChange={(e)=> this.props.onToChanged(e.target.value, this.props.id)} type="text" value={this.props.to}/>
      </div>
      <div className="player-selectAudio">
        <select value={this.props.selectedAudio} onChange={(e)=> this.props.onAudioChanged(parseInt(e.target.value), this.props.id)}>
          <option value="-1" key="-1"></option>
          {this.props.audios.map((audio)=>{
            return <option value={audio.key} key={audio.key}>{audio.name}</option>;
          })}
        </select>

      </div>
    </div>
  );
 }
}
export default Player;
