import React from 'react'
import "./Styles/style.css"
class LaunchpadKey extends React.Component {

 render() {

  return (
    <div className={(this.props.isPlaying? "pressed-animation ": "")+"launchpad-key " + this.props.id}>
    </div>
  );
 }
}
export default LaunchpadKey;
