import React from 'react'
import "./Styles/style.css"
import ProjectFiles from "../../Containers/ProjectFilesContainer"
import Piano from "../../Containers/PianoContainer"
class MainContent extends React.Component {
 render() {
  return (
    <div id="mainContent">
      <ProjectFiles className="flex-one-fifth"/>
      <div className="flex-four-fifth">
        <Piano />
      </div>
    </div>
  );
 }
}
export default MainContent;
