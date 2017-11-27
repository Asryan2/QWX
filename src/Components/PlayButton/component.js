import React from 'react'
import "./Styles/style.css"
class PlayButton extends React.Component {
  componentDidMount(){
    this.button.style.width = this.button.offsetHeight + "px"
  }
  componentDidUpdate(){
    this.button.style.width = this.button.offsetHeight + "px"
  }
 render() {
  return (
    <div id="playButton"
       className={this.props.className}
       ref={b => {this.button = b}}
       onClick={() => this.props.onPlayPause()}
       >
      {(this.props.isPlaying? (<div class="pauseIcon"></div>): (<div class="playIcon"></div>))}
    </div>
  );
 }
}
export default PlayButton;
