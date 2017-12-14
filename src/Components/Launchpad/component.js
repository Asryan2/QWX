import React from 'react'
import "./Styles/style.css"
import LaunchpadKey from "../LaunchpadKey/component"
import List from "../List/component"
class Launchpad extends React.Component {
  renderLaunchpadKey(id){
    var key;
    this.props.keys.forEach((item) => {
      if(item.id === id)
      key = item;
    });
    return (
      <LaunchpadKey
        key={key.id}
        id={key.id}
        isPlaying={key.isPlaying}
        onPlay={(id) => this.handleKeyPlay.bind(this)(id)}
        onStop={(id) => this.handleKeyStop.bind(this)(id)}
      />
    );
  }
 render() {
   var lists = [];
   for(var i = 0; i < 3; i++){
     var items = [];
     for(var j = i*4+1; j < i*4+5; j++){
       items.push(this.renderLaunchpadKey(j))
     }
     lists.push((
       <div className="launchpad-keys">
         <List orientation="horizontal" distance="5px" className="">
          {items}
         </List>
       </div>
     ));
   }
  return (
    <div id="launchpad">
        {lists.map((list)=>{
          return list
        })}
    </div>
  );
 }
}
export default Launchpad;
