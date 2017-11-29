import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { pianoKeyOn, pianoKeyOff } from "../Actions/piano"
import Piano from "../Components/Piano/component"

function mapStateToProps(state) {
  return {keys : state.piano.keys}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({
    pianoKeyOn,
    pianoKeyOff
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Piano);
