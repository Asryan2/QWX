import React from 'react'
import "./Styles/style.css"
import Topbar from "../../Containers/TopBarContainer"
import MainContent from "../MainContent/component"
import Launchpad from "../../Containers/LaunchpadContainer"

class App extends React.Component {
 render() {
  return (
    <div id="app">
      <Topbar />
      <div style={{position:"relative",height: "100%"}}>
        <MainContent />
        <Launchpad />
      </div>

    </div>
  );
 }
}
export default App;
