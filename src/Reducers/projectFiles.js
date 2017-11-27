import {
  PROJECTFILES_ADD_AUDIO,
  PROJECTFILES_PLAYPAUSE_AUDIO,
  PROJECTFILES_PAUSE_ALL,
  PROJECTFILES_STOP_AUDIO
} from "../Actions/projectFiles"

const initialState = {
  audioFiles: []
}

const projectFiles = function(state = initialState, action){
  switch(action.type){
    case PROJECTFILES_ADD_AUDIO:
      return Object.assign({}, state, {
        audioFiles: [...state.audioFiles, {key:state.audioFiles.length, path: action.path, isPlaying: false}]
      })
    case PROJECTFILES_PLAYPAUSE_AUDIO:
      return {
        audioFiles: state.audioFiles.map((audio)=>{
          if(audio.key === action.key){
            return Object.assign({}, audio, {isPlaying: !audio.isPlaying})
          }
          return audio
        })
      }
    case PROJECTFILES_PAUSE_ALL:
      return {audioFiles: state.audioFiles.map((audio)=>{
          return Object.assign({}, audio, {isPlaying: false})
        return audio
      })}
    case PROJECTFILES_STOP_AUDIO:
        return {audioFiles: state.audioFiles.map((audio)=>{
          if(audio.key === action.key)
            return Object.assign({}, audio, {isPlaying: false})
          return audio
        })}
    default:
      return state
  }
}

export default projectFiles
