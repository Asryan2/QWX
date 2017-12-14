import React from 'react'
import "./Styles/style.css"
import List from "../List/component"
import Player from "../Player/component"

class KeyEditor extends React.Component {
  handleAudioChanged(id, keyID){
    var audioFile
    this.props.audios.forEach((file) =>{
      if(file.key === id){
        audioFile = file
      }
    })
    this.props.actions.keyEditorChangeAudio(audioFile, keyID)
  }
  handlePlayPause(id){
    this.props.actions.keyEditorPlayAudio(id)


  }
  handleFromChanged(from,keyID){
    this.props.actions.keyEditorChangeFrom(from, keyID)
  }
  handleToChanged(to,keyID){
    this.props.actions.keyEditorChangeTo(to, keyID)
  }
  handleReload(id){
    this.props.actions.keyEditorReloadAudio(id);
  }
  renderPlayer(audio){
    return <Player
      key={audio.id}
      id={audio.id}
      path={audio.audio.name}
      isPlaying={audio.isPlaying}
      audios={this.props.audios}
      selectedAudio={audio.audio.id}
      from={audio.from}
      to={audio.to}
      onAudioChanged={(id, keyID) => this.handleAudioChanged.bind(this)(id, keyID)}
      onPlayPause={(id) => this.handlePlayPause.bind(this)(id)}
      onReload={(id) => this.handleReload.bind(this)(id)}
      onFromChanged={(from,keyID) => this.handleFromChanged.bind(this)(from,keyID)}
      onToChanged={(to,keyID) => this.handleToChanged.bind(this)(to,keyID)}
    />
  }
 render() {
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
