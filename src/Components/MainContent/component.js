import React from 'react'
import "./Styles/style.css"
import ProjectFiles from "../../Containers/ProjectFilesContainer"
import Piano from "../../Containers/PianoContainer"
import Launchpad from "../../Containers/LaunchpadContainer"
import KeyEditor from "../../Containers/KeyEditorContainer"
class MainContent extends React.Component {
 render() {
  return (
    <div id="mainContent">
      <ProjectFiles className="flex-one-fifth"/>
      <div className="flex-four-fifth">
        <KeyEditor/>
        <Launchpad />
      </div>
    </div>
  );
 }
}
export default MainContent;
