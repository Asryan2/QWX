import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import AppReducer from './Reducers/appReducer'
import { projectfilesAddAudio, projectfilesPlayAudio } from './Actions/projectFiles'
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
    let input = WebMidi.inputs[0];
    console.log(input);
    input.addListener('noteon', "all",
      function (e) {
        console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
      }
    );
  }
});



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);
