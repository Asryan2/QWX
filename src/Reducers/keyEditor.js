import {
  KEYEDITOR_ADD_AUDIO,
  KEYEDITOR_PLAY_AUDIO,
  KEYEDITOR_PAUSE_AUDIO,
  KEYEDITOR_PAUSE_ALL,
  KEYEDITOR_RELOAD_AUDIO,
  KEYEDITOR_CHANGE_AUDIO,
  KEYEDITOR_CHANGE_FROM,
  KEYEDITOR_CHANGE_TO,
  KEYEDITOR_CHANGE_ISLOOP,
} from "../Actions/keyEditor"

import {
  playAudio,
  pauseAudio,
  stopAudio
} from "../Helpers/audio"

const initialState = {
  audioFiles: [
      {id: 0, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 1, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 2, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0 , isLoop:false},
      {id: 3, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 4, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 5, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0 , isLoop:false},
      {id: 6, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 7, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 8, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0 , isLoop:false},
      {id: 9, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 10, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0, isLoop:false },
      {id: 11, isPlaying: false, audio: {key:-1, name:"", src:""},isPlaying: false, from: 0, to:0 , isLoop:false},
  ]
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let audioControl = document.getElementById("audioControl");

const keyEditor = function(state = initialState, action){
  switch(action.type){
    case KEYEDITOR_PLAY_AUDIO:
      return {
        audioFiles: state.audioFiles.map((audio)=>{
          if(audio.id === action.key){
            if(!audio.isPlaying){
              if(audio.audio.src != "")
                playAudio(audio.audio.src, (audio.from === "")? 0: audio.from, audio.id, (audio.to === "")? 0: audio.to, audio.isLoop)
            }
            else{
              pauseAudio(audio.id)
            }
            if(audio.audio.src != "")
              return Object.assign({}, audio, {isPlaying: true})
          }
          return audio
        })
      }
    case KEYEDITOR_PAUSE_AUDIO:
    return {
      audioFiles: state.audioFiles.map((audio)=>{
        if(audio.id === action.key){
          if(audio.isPlaying){
            pauseAudio(action.key)
          }
          return Object.assign({}, audio, {isPlaying: false})
        }
        return audio
      })
    }
    case KEYEDITOR_RELOAD_AUDIO:
        return {audioFiles: state.audioFiles.map((audio)=>{
          if(audio.key === action.key){
            if(audio.isPlaying){
            }
            return Object.assign({}, audio, {isPlaying: true})
          }
          return audio
        })}
    case KEYEDITOR_CHANGE_AUDIO:
        return {audioFiles: state.audioFiles.map((audio)=>{
          if(audio.id === action.info.key){

            return Object.assign({}, audio, {audio: (action.info.audio)? action.info.audio: {key:-1, name:"", src:""} })
          }
          return audio
        })}
    case KEYEDITOR_CHANGE_FROM:
        return {audioFiles: state.audioFiles.map((audio)=>{
          if(audio.id === action.info.key){
            if(isNumeric(action.info.from)){
              return Object.assign({}, audio, {from: parseInt(action.info.from)})
            }
            else if(action.info.from === ""){
              return Object.assign({}, audio, {from: ""})
            }
          }
          return audio
        })}
    case KEYEDITOR_CHANGE_TO:
        return {audioFiles: state.audioFiles.map((audio)=>{
          if(audio.id === action.info.key){
            if(isNumeric(action.info.to)){
              return Object.assign({}, audio, {to: parseInt(action.info.to)})
            }
            else if(action.info.to === ""){
              return Object.assign({}, audio, {to: ""})
            }
          }
          return audio
        })}
      case KEYEDITOR_CHANGE_ISLOOP:
          return {audioFiles: state.audioFiles.map((audio)=>{
            if(audio.id === action.info.key){
              return Object.assign({}, audio, {isLoop: !audio.isLoop})
            }
            return audio
          })}
    default:
    return state
  }
}

export default keyEditor
