import {MonoSynth, PolySynth, Tremolo, Distortion, Master} from "tone"
import {Synth} from "./audiosynth"
let audioControl = document.getElementById("audioControl");


export function playAudio(src, from){
  audioControl.src = src
  audioControl.currentTime = from

  audioControl.play()
}

export function pauseAudio(){
  audioControl.pause()
  return audioControl.currentTime
}

export function stopAudio(){
  audioControl.pause()
  audioControl.currentTime = 0
}

var notes = ['A0','B0']
for(var i = 1; i < 10; i++){
  for(var c = 'A'; c != 'H'; c = String.fromCharCode(c.charAt(0)+1)){
    notes.push(c+i);
  }
}
console.log(notes);
var piano = Synth.createInstrument('piano');
export function playNote(id){
  var sound = notes[id-1].substring(0,1);
  var note = notes[id-1].substring(1,2);
  console.log(note)
  piano.play(sound, note , 2)
}


export function stopNote(id){
}
