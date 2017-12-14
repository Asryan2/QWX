import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { keyEditorPlayPauseAudio, keyEditorPauseAll,keyEditorStopAudio } from "../Actions/keyEditor"
import KeyEditor from "../Components/KeyEditor/component"

function mapStateToProps(state) {
  return {
    keys : state.keyEditor.audioFiles.map((audio) => {
      return Object.assign({}, audio, {name:"asdasd"})
    }),
    audios: state.projectFiles.audioFiles

  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({
    keyEditorPlayPauseAudio,
    keyEditorPauseAll,
    keyEditorStopAudio
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyEditor);
