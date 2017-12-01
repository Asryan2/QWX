import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  projectfilesAddAudio,
  projectfilesPlayPauseAudio,
  projectfilesPauseAll,
  projectfilesStopAudio
 } from "../Actions/projectFiles"
import ProjectFiles from "../Components/ProjectFiles/component"

function mapStateToProps(state) {
  return {
    audioFiles : state.projectFiles.audioFiles
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({
    projectfilesAddAudio,
    projectfilesPlayPauseAudio,
    projectfilesPauseAll,
    projectfilesStopAudio
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFiles);
