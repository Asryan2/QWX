import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { projectfilesAddAudio, projectfilesPlayAudio } from './Actions/projectFiles'
import { keyEditorPlayAudio } from './Actions/keyEditor'
import store from "./store"
import App from './Components/App/component'
import WebMidi from 'webmidi'
// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>{}
  //console.log(store.getState())
)


WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    //console.log(WebMidi.inputs)
    if(WebMidi.inputs.length > 0){

      let input = WebMidi.inputs[0];
      var keys = ["C3", "C#3", "D3", "D#3", "E3"];

      console.log(input);
      input.addListener('noteon', "all",
        function (e) {
          console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
          for(var i = 0; i < keys.length; i++){
            if(keys[i] === e.note.name + e.note.octave)
              store.dispatch(keyEditorPlayAudio(i))
          }
        })
      }
    }

});

var keys = ['q', 'w', 'e', 'r','t','y','u','i','o','p','[',']'];

document.addEventListener("keydown", function (e) {
    e = e || window.event;
    var index = keys.indexOf(e.key);
    if(index !== -1)
      store.dispatch(keyEditorPlayAudio(index));
});



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);
