import React from 'react'
import "./Styles/style.css"
import Topbar from "../../Containers/TopBarContainer"
import MainContent from "../MainContent/component"
class App extends React.Component {
 render() {
  return (
    <div id="app">
      <Topbar />
      <MainContent />
    </div>
  );
 }
}
export default App;
