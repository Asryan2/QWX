import React from 'react'
import "./Styles/style.css"
import List from "../List/component"
import PianoKey from "../PianoKey/component"
class Piano extends React.Component {
  renderPianoKey(key){
    return (
      <PianoKey
        key={key.id}
        id={key.id}
        isPlaying={key.isPlaying}
        onPlay={(id) => this.handleKeyPlay.bind(this)(id)}
        onStop={(id) => this.handleKeyStop.bind(this)(id)}
      />
    );
  }
  handleKeyPlay(id){
    this.props.actions.pianoKeyOn(id);
  }
  handleKeyStop(id){
    this.props.actions.pianoKeyOff(id);
  }
 render() {
  return (
    <div id="piano">
      <List orientation="horizontal" distance="3px" className="piano-keys">
        {this.props.keys.map((key)=>{
          return this.renderPianoKey(key)
        })}
      </List>
    </div>
  );
 }
}
export default Piano;
