import React from 'react'
import "./Styles/style.css"
import ContainerHeader from "../ContainerHeader/component"
import List from "../List/component"
import PlayerSmall from "../PlayerSmall/component"
import AddButton from "../AddButton/component"
class ProjectFiles extends React.Component {
  renderPlayerSmall(audio){
    return <PlayerSmall
      key={audio.key}
      id={audio.key}
      path={audio.name}
      isPlaying={audio.isPlaying}
      percentCompleted={audio.percentCompleted}
      onPlayPause={(key) => this.handleAudioPlayPause.bind(this)(key)}
      onStopped={(key) => this.handleAudioStopped.bind(this)(key)}

    />
  }
  handleAudioPlayPause(key){
    this.props.audioFiles.forEach((audio) => {
      if(audio.key === key && audio.isPlaying === false)
        this.props.actions.projectfilesPauseAll();
    })
    this.props.actions.projectfilesPlayPauseAudio(key);
  }
  handleAudioStopped(key){
    this.props.actions.projectfilesStopAudio(key);
  }
  handleAudioAdd(file){
    if (file.type.indexOf('audio') != -1)
      this.props.actions.projectfilesAddAudio(file)
  }
 render() {
  return (
    <div id="projectFiles" className={this.props.className}>
      <div className="headerBar">
        <AddButton
          onAdd={(path) => this.handleAudioAdd.bind(this)(path)}
           className="special"/>
        <ContainerHeader text="Project Files"/>
      </div>
      <List orientation="vertical" distance="5px">
        {this.props.audioFiles.map((audio)=>{
          return this.renderPlayerSmall(audio)
        })}
      </List>
    </div>
  );
 }
}
export default ProjectFiles;
