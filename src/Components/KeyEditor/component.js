import React from 'react'
import "./Styles/style.css"
import List from "../List/component"
import Player from "../Player/component"

class KeyEditor extends React.Component {
  renderPlayer(audio){
    return <Player
      key={audio.key}
      id={audio.key}
      path={audio.name}
      isPlaying={audio.isPlaying}

    />
  }
 render() {
    console.log(this.props)
   return (
    <div id="keyEditor">
      <List orientation="vertical" distance="5px" className="audio-list">
        {this.props.keys.map((audio)=>{
          return this.renderPlayer(audio)
        })}
      </List>
    </div>
  );
 }
}
export default KeyEditor;
