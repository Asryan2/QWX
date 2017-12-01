import {
  PROJECTFILES_ADD_AUDIO,
  PROJECTFILES_PLAYPAUSE_AUDIO,
  PROJECTFILES_PAUSE_ALL,
  PROJECTFILES_STOP_AUDIO
} from "../Actions/projectFiles"

import {
  playAudio,
  pauseAudio,
  stopAudio
} from "../Helpers/audio"

const initialState = {
  audioFiles: []
}

let audioControl = document.getElementById("audioControl");

const projectFiles = function(state = initialState, action){
  switch(action.type){
    case PROJECTFILES_ADD_AUDIO:
      let url = URL.createObjectURL(action.file);

      return Object.assign({}, state, {
        audioFiles: [...state.audioFiles,
          {
            key:state.audioFiles.length,
            name:action.file.name,
            src: url,
            format: action.file.type.split("/")[1],
            isPlaying: false,
            playTime: 0,
            percentCompleted: 0
          }
        ]
      })
    case PROJECTFILES_PLAYPAUSE_AUDIO:
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
    case PROJECTFILES_PAUSE_ALL:
      return {
        audioFiles: state.audioFiles.map((audio)=>{
          if(audio.isPlaying){
              audio.playTime = pauseAudio()
          }
          return Object.assign({}, audio, {isPlaying: false})
        })
      }
    case PROJECTFILES_STOP_AUDIO:
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

export default projectFiles
