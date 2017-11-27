import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { typeSelectorSelect } from "../Actions/typeSelector"
import Topbar from "../Components/Topbar/component"

function mapStateToProps(state) {
  return {typeSelector : state.typeSelector}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({
    selectType: typeSelectorSelect
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
