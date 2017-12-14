import {
  KEYEDITOR_ADD_AUDIO,
  KEYEDITOR_PLAYPAUSE_AUDIO,
  KEYEDITOR_PAUSE_ALL,
  KEYEDITOR_STOP_AUDIO
} from "../Actions/keyEditor"

import {
  playAudio,
  pauseAudio,
  stopAudio
} from "../Helpers/audio"

const initialState = {
  audioFiles: [
      {id: 1, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 2, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 3, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 4, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 5, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 6, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 7, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 8, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 9, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 10, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 11, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
      {id: 12, isPlaying: false, audioId:-1,isPlaying: false, playTime: 0},
  ]
}

let audioControl = document.getElementById("audioControl");

const keyEditor = function(state = initialState, action){
  switch(action.type){
    case KEYEDITOR_PLAYPAUSE_AUDIO:
      return {
        audioFiles: state.audioFiles.map((audio)=>{
          if(audio.key === action.key){
            if(!audio.isPlaying){
              playAudio(audio.src, audio.playTime)
            }
            else{
              audio.playTime = pauseAudio()
            }
            return Object.assign({}, audio, {isPlaying: !audio.isPlaying})
          }
          return audio
        })
      }
    case KEYEDITOR_PAUSE_ALL:
      return {
        audioFiles: state.audioFiles.map((audio)=>{
          if(audio.isPlaying){
              audio.playTime = pauseAudio()
          }
          return Object.assign({}, audio, {isPlaying: false})
        })
      }
    case KEYEDITOR_STOP_AUDIO:
        return {audioFiles: state.audioFiles.map((audio)=>{
          if(audio.key === action.key){
            if(audio.isPlaying){
              stopAudio()
            }
            return Object.assign({}, audio, {isPlaying: false, playTime: 0})
          }
          return audio
        })}
    default:
    return state
  }
}

export default keyEditor
