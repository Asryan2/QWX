import {MonoSynth, PolySynth, Tremolo, Distortion, Master} from "tone"
import {Synth} from "./audiosynth"
import {keyEditorPauseAudio} from "../Actions/keyEditor"
import store from "../store"
let audioControl = document.getElementById("audioControl");
let keys= [
  document.getElementById("audioOne"),
  document.getElementById("audioTwo"),
  document.getElementById("audioThree"),
  document.getElementById("audioFour"),
  document.getElementById("audioFive"),
  document.getElementById("audioSix"),
  document.getElementById("audioSeven"),
  document.getElementById("audioEight"),
  document.getElementById("audioNine"),
  document.getElementById("audioTen"),
  document.getElementById("audioEleven"),
   document.getElementById("audioTwelve"),
]
var timeouts = []

var bpm = 90;
var queuePlay = [];
var queuePause = [];
var interval = setInterval(() => {
  while(queuePlay.length !== 0){
    var item = queuePlay.pop();

    keys[item.key].src = item.src
    keys[item.key].currentTime = item.from/1000
    console.log(keys[item.key].duration*1000)
    keys[item.key].play();

    timeouts[item.key] = setTimeout(()=>{
      pauseAudio(item.key)
    }, (item.to - item.from));

    keys[item.key].addEventListener("ended", function(){
      pauseAudio(item.key)
});
  }
  while(queuePause.length !== 0){
    var item = queuePause.pop();

    keys[item.key].pause();
    if(timeouts[item.key] !== undefined){
      clearTimeout(timeouts[item.key])
      timeouts[item.key] = undefined
    }

    store.dispatch(keyEditorPauseAudio(item.key));
  }
}, 1000);


export function playAudio(src, from, key, to){
  if(key > -1 && key < keys.length){
      queuePlay.push({key, to, from, src});
  }
  else{
    audioControl.src = src
    audioControl.currentTime = from

    audioControl.play()
  }
}

export function pauseAudio(key){
  if(key >= 0 && key < keys.length){
    queuePause.push({key});
  }
  else{
    audioControl.pause()
    return audioControl.currentTime
  }
}

export function stopAudio(){
  audioControl.pause()
  audioControl.currentTime = 0
}

export function playNote(id){
}


export function stopNote(id){
}
