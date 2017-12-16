import React from 'react'
import "./Styles/style.css"
class LaunchpadKey extends React.Component {
  randomColor(){
    var colors = ["red", "blue", "green"];
    var random = colors[Math.floor(Math.random()*colors.length)]
    return random;
  }
  animateIN(){
    if(this.key){
      this.key.style.background = "blue";
    }

  }
  animateOUT(){
    if(this.key){
      this.key.style.background = "";

    }
  }
 render() {
   if(this.props.isPlaying){
     this.animateIN();
   }
   else{
     this.animateOUT();
   }
  return (
    <div  ref={(key) => { this.key = key; }} className={(this.props.isPlaying? "pressed-animation ": "")+"launchpad-key " + this.props.id}>
    </div>
  );
 }
}
export default LaunchpadKey;
