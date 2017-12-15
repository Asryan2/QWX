
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

export function setVolume(volume){
  keys.forEach((el)=>{
    el.volume = volume;
  })
}

window.setVolume = setVolume;


export function playAudio(src, from, key, to, isLoop){
  if(key > -1 && key < keys.length){
    clearTimeout(timeouts[key])

    keys[key].src = src
    keys[key].currentTime = from/1000
    if(isLoop){
      keys[key].addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
    }
    else{
      if(!(to === 0 && from ===0)){
        timeouts[key] = setTimeout(()=>{
          pauseAudio(key)
        }, (to - from));
      }
      keys[key].addEventListener("ended", function(){
        if(!isLoop)
          pauseAudio(key)
      });
    }
    keys[key].play();
  }
  else{
    audioControl.src = src
    audioControl.currentTime = from
    audioControl.addEventListener('ended', function() {
      this.currentTime = 0;
      this.pause();
    }, false);
    audioControl.play()
  }
}

export function pauseAudio(key){
  if(key >= 0 && key < keys.length){

    keys[key].pause();
    if(timeouts[key] !== undefined){
      clearTimeout(timeouts[key])
      timeouts[key] = undefined
    }

    setTimeout(()=> store.dispatch(keyEditorPauseAudio(key), 100));
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
