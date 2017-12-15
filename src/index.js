import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { projectfilesAddAudio, projectfilesPlayAudio } from './Actions/projectFiles'
import { setVolume } from './Helpers/audio'
import { keyEditorPlayAudio } from './Actions/keyEditor'
import { typeSelectorTab, TypeSelectorTypes } from './Actions/typeSelector'
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
    console.log(WebMidi.inputs)
    if(WebMidi.inputs.length > 0){

      var keys = ["C3", "C#3", "D3", "D#3", "E3","F3","F#3","G3","G#3","A3","A#3","B3"];
      let input = WebMidi.inputs[1];
      input.addListener('noteon', "all",
        function (e) {
          console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
          for(var i = 0; i < keys.length; i++){
            if(keys[i] === e.note.name + e.note.octave)
              store.dispatch(keyEditorPlayAudio(i))
          }
        })
        var maxSoundValue = 0;
        input.addListener('controlchange', "all",
            function (e) {
              console.log("Received 'controlchange' message.", e.value);
              if(e.value > maxSoundValue) maxSoundValue = e.value;
              var volume = e.value/maxSoundValue;
              setVolume(volume)
            }
          );
          input.addListener('pitchbend', "all",
            function (e) {
              console.log("Received 'pitchbend' message.", e);
            })
    }
  }
})
// window.init = function(n){
//   WebMidi.enable(function (err) {
//     if (err) {
//       console.log("WebMidi could not be enabled.", err);
//     } else {
//       console.log(WebMidi.inputs)
//       if(WebMidi.inputs.length > 0){
//
//         var keys = ["C3", "C#3", "D3", "D#3", "E3"];
//         let input = WebMidi.inputs[n];
//
//         console.log(input);
//         input.addListener('noteon', "all",
//           function (e) {
//             console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
//             for(var i = 0; i < keys.length; i++){
//               if(keys[i] === e.note.name + e.note.octave)
//                 store.dispatch(keyEditorPlayAudio(i))
//             }
//           })
//           var maxSoundValue = 0;
//           input.addListener('controlchange', "all",
//               function (e) {
//                 console.log("Received 'controlchange' message.", e.value);
//                 if(e.value > maxSoundValue) maxSoundValue = e.value;
//                 var volume = e.value/maxSoundValue;
//                 setVolume(volume)
//               }
//             );
//             input.addListener('pitchbend', "all",
//               function (e) {
//                 console.log("Received 'pitchbend' message.", e);
//               })
//
//         }
//       }
//
//   });
//
//
// }

var keys = ['q', 'w', 'e', 'r','t','y','u','i','o','p','[',']'];

document.addEventListener("keydown", function (e) {
    e = e || window.event;
    if(e.keyCode === 9)
      store.dispatch(typeSelectorTab(TypeSelectorTypes.Play));

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
