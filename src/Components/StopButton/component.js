import React from 'react'
import "./Styles/style.css"
class StopButton extends React.Component {
  componentDidMount(){
    this.button.style.width = this.button.offsetHeight + "px"
  }
  componentDidUpdate(){
    this.button.style.width = this.button.offsetHeight + "px"
  }
 render() {
  return (
    <div id="stopButton"
       className={this.props.className}
       ref={b => {this.button = b}}
       onClick={this.props.onStopped}>
      <div class="stopIcon"></div>
    </div>
  );
 }
}
export default StopButton;
