import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { keyEditorPlayAudio,
      keyEditorPauseAudio,
      keyEditorReloadAudio,
      keyEditorChangeAudio,
      keyEditorChangeFrom,
      keyEditorChangeTo,
      keyEditorChangeIsLoop,
     } from "../Actions/keyEditor"
import KeyEditor from "../Components/KeyEditor/component"

function mapStateToProps(state) {
  return {
    keys : state.keyEditor.audioFiles.map((audio) => {
      return Object.assign({}, audio)
    }),
    audios: state.projectFiles.audioFiles

  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({
    keyEditorPlayAudio,
    keyEditorPauseAudio,
    keyEditorReloadAudio,
    keyEditorChangeAudio,
    keyEditorChangeFrom,
    keyEditorChangeTo,
    keyEditorChangeIsLoop
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyEditor);
