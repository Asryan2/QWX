import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { pianoKeyOn, pianoKeyOff } from "../Actions/piano"
import { keyEditorPlayAudio } from '../Actions/keyEditor'

import{TypeSelectorTypes} from "../Actions/typeSelector"
import Launchpad from "../Components/Launchpad/component"

function mapStateToProps(state) {
  return {
    keys : state.keyEditor.audioFiles,
    isEdit: state.typeSelector === TypeSelectorTypes.Edit
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({
    keyEditorPlayAudio
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Launchpad);
