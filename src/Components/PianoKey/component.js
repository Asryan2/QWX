import React from 'react'
import "./Styles/style.css"
class PianoKey extends React.Component {
  animateKeyElementPressed(){
    this.pianoKeyAnimation = setInterval(()=>{
      if(this.keyElementBox.style.top == false)
        this.keyElementBox.style.top = "-10px";
      this.keyElementBox.style.height =
      this.keyElementBox.offsetHeight + 1 + "px";
      this.keyElementBox.style.top = parseInt(this.keyElementBox.style.top, 10) - 1 + "px"
    }, 10);
  }
  unanimateKeyElementPressed(){
    clearInterval(this.pianoKeyAnimation);
    this.keyElementBox.style.height = "0px";
    this.keyElementBox.style.top = "-10px";
  }
  handleMouseDown(){
    this.animateKeyElementPressed();
    this.props.onPlay(this.props.id)
  }
  handleMouseUp(){
    this.unanimateKeyElementPressed();
    this.props.onStop(this.props.id)
  }

 render() {
  return (
    <div
      className={"piano-key-wrapper " +
      (this.props.isPlaying? "pressed-animation": "")}
      >
        <div
          className="piano-key-box"
          ref={(el) => this.keyElementBox = el}
          ></div>
      <div
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        className={"piano-key " + (this.props.isPlaying? "pressed": "")}

        >
      </div>
    </div>
  );
 }
}
export default PianoKey;
