import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import AppReducer from './Reducers/appReducer'
import { projectfilesAddAudio, projectfilesPlayAudio } from './Actions/projectFiles'
import { pianoKeyOn, pianoKeyOff } from './Actions/piano'
import App from './Components/App/component'
import WebMidi from 'webmidi'

let store = createStore(AppReducer)
// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log(WebMidi.inputs)
    let input = WebMidi.inputs[0];
    console.log(input);
    input.addListener('noteon', "all",
      function (e) {
        console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
        	store.dispatch(pianoKeyOn(2));

      }
    );

    input.addListener('noteoff', "all",
      function (e) {
        console.log("Received 'noteoff' message (" + e.note.name + e.note.octave + ").");

        	store.dispatch(pianoKeyOff(2));
      }
    );
  }
});

var keys = ['q', 'w', 'e', 'r','t','y','u','i','o','p','[',']'];

document.addEventListener("keydown", function (e) {
    e = e || window.event;
    var index = keys.indexOf(e.key);
    if(index !== -1)
      store.dispatch(pianoKeyOn(index+1));
});


document.addEventListener("keyup", function (e) {
    e = e || window.event;

    var index = keys.indexOf(e.key);
    if(index !== -1)
      store.dispatch(pianoKeyOff(index+1));
});


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);
